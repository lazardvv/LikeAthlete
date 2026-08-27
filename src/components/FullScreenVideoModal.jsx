import React from 'react';
import { createPortal } from 'react-dom';

const FullScreenVideoModal = ({ exercise, onClose }) => {
  if (!exercise) return null;
  if (typeof document === 'undefined') return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const modal = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(6px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'transparent',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 40,
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.95)',
            cursor: 'pointer',
            fontSize: 22,
            lineHeight: '44px'
          }}
        >
          ×
        </button>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
          {exercise.videoURL_360p ? (
            <video
              controls
              autoPlay
              playsInline
              poster={exercise.poster}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            >
              <source src={exercise.videoURL_360p || exercise.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={exercise.poster} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default FullScreenVideoModal;
