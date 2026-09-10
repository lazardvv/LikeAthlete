const express = require('express');
const cors = require('cors');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const { Client, Storage } = require('node-appwrite');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();
const port = 3001;

fs.mkdirSync('uploads', { recursive: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup
const upload = multer({ dest: 'uploads/' });

// Appwrite client
const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const storage = new Storage(client);

// Helper to upload file to Appwrite
async function uploadToAppwrite(filePath, fileName) {
  const fileStream = fs.createReadStream(filePath);
  const response = await storage.createFile(
    process.env.APPWRITE_BUCKET_ID,
    'unique()',
    fileStream,
    fileName
  );
  return `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${response.$id}/view?project=${process.env.APPWRITE_PROJECT_ID}`;
}

app.post('/upload-catbox', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Video file is required.' });
  }

  try {
    const fileBuffer = fs.readFileSync(req.file.path);
    const fileBlob = new Blob([fileBuffer], { type: req.file.mimetype || 'application/octet-stream' });

    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('fileToUpload', fileBlob, req.file.originalname);

    const catboxResponse = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: formData,
    });

    const rawText = await catboxResponse.text();

    if (!catboxResponse.ok) {
      throw new Error(`Catbox responded with ${catboxResponse.status}: ${rawText.slice(0, 300)}`);
    }

    const url = rawText.trim();

    if (!url || !/^https?:\/\//i.test(url)) {
      throw new Error(`Catbox did not return a valid URL. Response: ${rawText.slice(0, 300)}`);
    }

    res.json({ url });
  } catch (error) {
    console.error('Catbox upload error:', error);
    res.status(500).json({ error: error.message || 'Catbox upload failed' });
  } finally {
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
  }
});

// Upload route
app.post('/api/vidhold/upload-url', async (req, res) => {
  const remoteUrl = String(req.body?.url || '').trim();
  const apiKey = String(process.env.VIDHOLD_API_KEY || '').trim();

  if (!remoteUrl) {
    return res.status(400).json({ error: 'Nedostaje url parametar.' });
  }

  if (!apiKey) {
    return res.status(500).json({ error: 'Vidhold API key nije konfigurisan na serveru.' });
  }

  try {
    const endpoint = `https://vidhold.com/api/upload/url?${new URLSearchParams({ key: apiKey, url: remoteUrl }).toString()}`;
    const response = await fetch(endpoint, { method: 'GET', headers: { Accept: 'application/json' } });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({
        error: payload?.msg || payload?.error || 'Vidhold remote upload nije uspio.',
      });
    }

    const fileCode = payload?.result?.filecode || payload?.filecode || payload?.result?.file_code || payload?.result?.id;
    const resolvedUrl = fileCode ? `https://vidhold.com/${fileCode}` : remoteUrl;

    return res.json({
      ok: true,
      url: resolvedUrl,
      fileCode,
    });
  } catch (error) {
    console.error('Vidhold remote upload error:', error);
    return res.status(500).json({ error: error.message || 'Vidhold remote upload nije uspio.' });
  }
});

app.post('/api/vidhold/upload-file', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Fajl je obavezan.' });
  }

  const apiKey = String(process.env.VIDHOLD_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(500).json({ error: 'Vidhold API key nije konfigurisan na serveru.' });
  }

  try {
    const formData = new FormData();
    formData.append('api_key', apiKey);
    formData.append('file', new Blob([fs.readFileSync(req.file.path)], { type: req.file.mimetype || 'application/octet-stream' }), req.file.originalname);

    const response = await fetch('https://vidhold.com/api/upload/file', {
      method: 'POST',
      body: formData,
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({
        error: payload?.msg || payload?.error || 'Vidhold upload nije uspio.',
      });
    }

    const fileCode = payload?.result?.filecode || payload?.filecode || payload?.result?.file_code || payload?.result?.id;
    const resolvedUrl = fileCode ? `https://vidhold.com/${fileCode}` : '';

    if (!resolvedUrl) {
      return res.status(500).json({ error: 'Vidhold nije vratio validan URL nakon upload-a.' });
    }

    return res.json({ ok: true, url: resolvedUrl, fileCode });
  } catch (error) {
    console.error('Vidhold direct upload error:', error);
    return res.status(500).json({ error: error.message || 'Vidhold upload nije uspio.' });
  } finally {
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
  }
});

app.post('/upload', upload.single('file'), async (req, res) => {
  const inputPath = req.file.path;
  const originalName = req.file.originalname;
  const baseName = originalName.split('.').slice(0, -1).join('.');
  const ext = originalName.split('.').pop();

  const output360p = `uploads/${baseName}_360p.${ext}`;
  const thumbnail = `uploads/${baseName}_thumb.jpg`;

  try {
    // Convert to 360p
    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions(['-vf scale=640:360', '-c:v libx264', '-crf 28', '-preset fast', '-c:a aac', '-b:a 128k'])
        .save(output360p)
        .on('end', resolve)
        .on('error', reject);
    });

    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .screenshots({
          timestamps: ['5'],
          filename: `${baseName}_thumb.jpg`,
          folder: 'uploads',
        })
        .on('end', resolve)
        .on('error', reject);
    });

    const [originalURL, video360pURL, thumbnailURL] = await Promise.all([
      uploadToAppwrite(inputPath, originalName),
      uploadToAppwrite(output360p, `${baseName}_360p.${ext}`),
      uploadToAppwrite(thumbnail, `${baseName}_thumb.jpg`),
    ]);

    fs.unlinkSync(inputPath);
    fs.unlinkSync(output360p);
    fs.unlinkSync(thumbnail);

    res.json({
      originalURL,
      video360pURL,
      thumbnailURL,
    });

  } catch (err) {
    console.error('Greška u obradi:', err);
    res.status(500).json({ error: err.message || 'Upload failed' });
  }

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});