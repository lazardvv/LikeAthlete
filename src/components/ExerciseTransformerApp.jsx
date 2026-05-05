import React, { useState } from 'react';

const ExerciseTransformerApp = () => {
  const [transformedData, setTransformedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const cleanURL = (url) => url.replace(/&amp;/g, '&');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const rawData = JSON.parse(e.target.result);
        const exercise = rawData.map(item => ({
          id: item.id,
          athlete: item.athlete,
          title: item.title,
          athletesSports: item.athletesSports,
          videoURL: cleanURL(item.videoURL),
          videoURL_360p: cleanURL(item.videoURL_360p),
          poster: cleanURL(item.poster)
        }));
        setTransformedData(exercise);
        setCopied(false);
      } catch (error) {
        alert('Greška: JSON fajl nije validan.');
      }
    };

    reader.readAsText(file);
  };

  const formatAsJSObject = (data) => {
    return `const exercise = [\n${data.map(obj => {
      return `  {\n${Object.entries(obj).map(([key, value]) => {
        return `    ${key}: ${typeof value === 'string' ? `'${value}'` : value}`;
      }).join(',\n')}\n  }`;
    }).join(',\n')}\n];`;
  };

  const copyToClipboard = () => {
    const textToCopy = formatAsJSObject(transformedData);
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Transformiši JSON fajl u JS objekat</h2>
      <input type="file" accept="application/json" onChange={handleFileUpload} />
      {transformedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>JS objekat:</h3>
          <pre style={{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderRadius: '5px',
            overflowX: 'auto'
          }}>
{formatAsJSObject(transformedData)}
          </pre>
          <button onClick={copyToClipboard} style={{ marginTop: '10px' }}>
            {copied ? '✅ Kopirano!' : 'Kopiraj u clipboard'}
          </button>
        </div>
      )}
    </div>
  );
};



export default ExerciseTransformerApp;
