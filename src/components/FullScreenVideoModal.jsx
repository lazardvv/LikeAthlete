import React from 'react';
import { createPortal } from 'react-dom';

const FullScreenVideoModal = ({ exercise, onClose, onAddToWorkout, currentWorkout }) => {
  if (!exercise) return null;
  if (typeof document === 'undefined') return null;

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const modal = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(6px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(96vw, 880px)',
          maxWidth: '96vw',
          maxHeight: '90vh',
          backgroundColor: '#000',
          borderRadius: 12,
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
            top: 10,
            right: 10,
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

        {onAddToWorkout && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
              onAddToWorkout();
            }}
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              zIndex: 40,
              border: 'none',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 700,
              padding: '10px 14px',
              boxShadow: '0 8px 20px rgba(16, 185, 129, 0.35)'
            }}
          >
            ➕ Add to Workout
          </button>
        )}

        <div style={{ padding: '10px 14px', color: '#fff', textAlign: 'center', fontWeight: 700 }}>
          {exercise.exerciseTitle || exercise.title}
        </div>

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
                objectFit: 'contain'
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
