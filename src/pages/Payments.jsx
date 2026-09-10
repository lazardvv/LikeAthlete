import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  saveUploadedExercise,
  resolveRemoteMediaUrls,
  generatePosterFileFromVideo,
  saveExerciseFromStagedFiles,
} from '../../services/exerciseUpload';

const Payments = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [athlete, setAthlete] = useState('');
  const [athletesSports, setAthletesSports] = useState('');
  const [file, setFile] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState('');
  const [uploadedPosterUrl, setUploadedPosterUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [useRemoteUrl, setUseRemoteUrl] = useState(false);
  const [videoRemoteUrl, setVideoRemoteUrl] = useState('');
  const [posterRemoteUrl, setPosterRemoteUrl] = useState('');

  useEffect(() => {
    return () => {
      if (selectedVideoUrl) URL.revokeObjectURL(selectedVideoUrl);
    };
  }, [selectedVideoUrl]);

  const handleFileChange = (event) => {
    const chosenFile = event.target.files?.[0] || null;
    setFile(chosenFile);
    setError('');
    setMessage('');

    if (chosenFile) {
      const objectUrl = URL.createObjectURL(chosenFile);
      setSelectedVideoUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return objectUrl;
      });
    } else {
      setSelectedVideoUrl('');
    }
  };

  const resetForm = (form) => {
    setTitle('');
    setAthlete('');
    setAthletesSports('');
    setFile(null);
    setSelectedVideoUrl('');
    setVideoRemoteUrl('');
    setPosterRemoteUrl('');
    if (form) {
      form.reset();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('Morate biti prijavljeni da biste uploadovali vježbu.');
      return;
    }

    if (!title.trim() || !athlete.trim() || !athletesSports.trim()) {
      setError('Unesite naziv vježbe, sportistu i sport.');
      return;
    }

    try {
      setUploading(true);
      setUploadProgress(0);
      setError('');
      setMessage('');

      let uploadedUrl = '';
      let posterUrl = '';

      if (!useRemoteUrl) {
        if (!file) {
          setError('Odaberite video fajl ili uključite URL mod za remote upload.');
          return;
        }

        const posterFile = await generatePosterFileFromVideo(file, title);
        const stagedResult = await saveExerciseFromStagedFiles({
          athlete,
          title,
          athletes_sports: athletesSports,
          videoFile: file,
          posterFile,
          onProgress: (value) => setUploadProgress(Math.round(value)),
        });

        uploadedUrl = stagedResult.video_url;
        posterUrl = stagedResult.poster_url || '';
      } else {
        if (!videoRemoteUrl.trim()) {
          setError('Unesite raw video URL ili Vidhold URL koji treba importovati.');
          return;
        }

        const remoteMedia = await resolveRemoteMediaUrls({
          videoUrl: videoRemoteUrl,
          posterUrl: posterRemoteUrl,
          onProgress: (value) => setUploadProgress(value),
        });

        uploadedUrl = remoteMedia.video_url;
        posterUrl = remoteMedia.poster_url || '';

        const generatedId = Date.now();
        await saveUploadedExercise({
          id: generatedId,
          athlete,
          title,
          athletes_sports: athletesSports,
          video_url: uploadedUrl,
          video_url_360p: uploadedUrl,
          poster_url: posterUrl || null,
        });
      }

      setUploadedVideoUrl(uploadedUrl);
      setUploadedPosterUrl(posterUrl);
      setUploadProgress(100);
      setMessage('Vježba je uspješno uploadovana i spremljena.');
      resetForm(e.target);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Greška pri uploadu vježbe.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ maxWidth: 820, margin: '40px auto', padding: '20px 16px 40px' }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Upload video</h2>
        <p style={{ marginTop: 12, color: '#4b5563', lineHeight: 1.6 }}>
          Ulogovani korisnik može uploadovati video preko lokalnog fajla ili koristiti postojeći raw URL. Kada je URL mod uključen, aplikacija može direktno da poveže video/poster sa Supabase zapisom bez zavisnosti od lokalne mreže.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14, background: '#fff', padding: 18, borderRadius: 16, boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
          <input
            type="text"
            placeholder="Naziv vježbe"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Ime sportiste"
            value={athlete}
            onChange={(e) => setAthlete(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Sport sportiste"
            value={athletesSports}
            onChange={(e) => setAthletesSports(e.target.value)}
            required
            style={inputStyle}
          />

          <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={useRemoteUrl}
              onChange={(e) => setUseRemoteUrl(e.target.checked)}
            />
            Koristi postojeći video/poster URL
          </label>

          {useRemoteUrl ? (
            <>
              <input
                type="url"
                placeholder="Raw video URL"
                value={videoRemoteUrl}
                onChange={(e) => setVideoRemoteUrl(e.target.value)}
                required
                style={inputStyle}
              />

              <input
                type="url"
                placeholder="Raw poster URL (opciono)"
                value={posterRemoteUrl}
                onChange={(e) => setPosterRemoteUrl(e.target.value)}
                style={inputStyle}
              />

              <small style={{ color: '#4b5563', lineHeight: 1.5 }}>
                Ako postoji VITE_VIDHOLD_API_KEY u .env-u, aplikacija će pokušati da importuje video preko Vidhold API-ja. Ako API ne vrati direktni URL, koristi se raw URL koji ste uneli.
              </small>
            </>
          ) : (
            <>
              <label style={{ display: 'grid', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>Odaberi video</span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  style={{ width: '100%' }}
                />
              </label>

              {selectedVideoUrl && (
                <video
                  src={selectedVideoUrl}
                  controls
                  playsInline
                  style={{ width: '100%', maxHeight: 220, borderRadius: 12, background: '#111827' }}
                />
              )}
            </>
          )}

          {uploading && (
            <div style={{ display: 'grid', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#374151' }}>
                <span>Upload u toku</span>
                <span>{uploadProgress}%</span>
              </div>
              <div style={{ width: '100%', height: 10, background: '#e5e7eb', borderRadius: 999 }}>
                <div
                  style={{
                    width: `${uploadProgress}%`,
                    height: '100%',
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, #0ea5e9, #2563eb)',
                    transition: 'width 0.25s ease',
                  }}
                />
              </div>
            </div>
          )}

          <button type="submit" disabled={uploading} style={{ ...buttonStyle, opacity: uploading ? 0.7 : 1 }}>
            {uploading ? 'Uploadujem...' : useRemoteUrl ? 'Dodaj sa URL-a' : 'Upload video'}
          </button>
        </form>

        <div style={{ background: '#fff', padding: 18, borderRadius: 16, boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
          {uploadedVideoUrl || uploadedPosterUrl ? (
            <>
              <h3 style={{ marginTop: 0 }}>Preview</h3>

              {uploadedPosterUrl && (
                <img
                  src={uploadedPosterUrl}
                  alt="Exercise poster preview"
                  style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }}
                />
              )}

              {uploadedVideoUrl && (
                <video
                  src={uploadedVideoUrl}
                  controls
                  playsInline
                  style={{ width: '100%', borderRadius: 12, background: '#111827' }}
                />
              )}
            </>
          ) : (
            <div style={{ minHeight: 280, display: 'grid', placeItems: 'center', color: '#6b7280', textAlign: 'center', border: '1px dashed #d1d5db', borderRadius: 12 }}>
              <div>
                <div style={{ fontSize: 42, marginBottom: 8 }}>🎥</div>
                <div>Preview videa i postera pojaviće se ovde nakon uspešnog upload-a.</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div style={{ marginTop: 18, padding: '12px 14px', background: '#fef2f2', color: '#991b1b', borderRadius: 10, fontWeight: 600 }}>
          {error}
        </div>
      )}

      {message && (
        <div style={{ marginTop: 18, padding: '12px 14px', background: '#ecfdf5', color: '#166534', borderRadius: 10, fontWeight: 600 }}>
          {message}
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid #d1d5db',
  borderRadius: 12,
  fontSize: 16,
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '14px 16px',
  border: 'none',
  borderRadius: 12,
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
  color: '#fff',
  fontSize: 16,
  fontWeight: 700,
};

export default Payments;
