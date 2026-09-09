const express = require('express');
const cors = require('cors');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const { Client, Storage } = require('node-appwrite');
require('dotenv').config();

const app = express();
const port = 3001;

fs.mkdirSync('uploads', { recursive: true });

app.use(cors());

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

    // Generate thumbnail (original resolution)
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

    // Upload files to Appwrite
    const [originalURL, video360pURL, thumbnailURL] = await Promise.all([
      uploadToAppwrite(inputPath, originalName),
      uploadToAppwrite(output360p, `${baseName}_360p.${ext}`),
      uploadToAppwrite(thumbnail, `${baseName}_thumb.jpg`),
    ]);

    // Cleanup local files
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