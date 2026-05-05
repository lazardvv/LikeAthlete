import { useState } from 'react';

function ExerciseUploader() {
const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [athlete, setAthlete] = useState('');
  const [athletesSports, setAthletesSports] = useState('');

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // 1. Upload original video
    const originalRes = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await originalRes.json();

    // data = {
    //   originalURL: "...",
    //   video360pURL: "...",
    //   thumbnailURL: "...",
    //   clipURL: "..."
    // }

    const newExercise = {
      id: Date.now(), // or generate UUID
      athlete,
      title,
      athletesSports,
      videoURL: data.originalURL,
      videoURL_360p: data.video360pURL,
      poster: data.thumbnailURL,
    };

    console.log('Nova vježba:', newExercise);
    // Ovdje možeš dodati logiku za čuvanje u state, slanje na backend itd.
  };

  return (
    <div>
      <h2>Dodaj novu vježbu</h2>
      <input type="text" placeholder="Ime vježbe" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Ime sportiste" value={athlete} onChange={(e) => setAthlete(e.target.value)} />
      <input type="text" placeholder="Sport" value={athletesSports} onChange={(e) => setAthletesSports(e.target.value)} />
      <input type="file" accept="video/mp4" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Uploaduj vježbu</button>
    </div>
  );
}

export default ExerciseUploader;