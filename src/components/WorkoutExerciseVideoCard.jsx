import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import athletes from '../data/athletes';

const WorkoutExerciseVideoCard = ({ exercise, onEdit, onDelete }) => {
  const videoRef = useRef(null);
  const loadedVideos = useRef({});
  const [quality, setQuality] = useState('360p');
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) videoRef.current.controls = true;
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) videoRef.current.controls = false;
  };

  const handleQualityChange = (e) => {
    const selectedQuality = e.target.value;
    setQuality(selectedQuality);

    if (videoRef.current) {
      const newSrc = selectedQuality === '360p' ? exercise.videoURL_360p : exercise.videoURL;

      if (loadedVideos.current[newSrc]) {
        videoRef.current.src = newSrc;
      } else {
        videoRef.current.src = newSrc;
        videoRef.current.load();
        loadedVideos.current[newSrc] = true;
      }
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;

    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.src = exercise.videoURL_360p;
      loadedVideos.current[exercise.videoURL_360p] = true;
    }
  }, [isVisible, exercise.videoURL_360p]);

  return (
    <div
      className="exercise-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        className="video-element"
        muted
        preload="metadata"
        poster={exercise.poster}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          display: isPosterLoaded ? 'block' : 'none'
        }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Hidden image to detect poster load */}
      <img
        src={exercise.poster}
        alt="poster loader"
        style={{ display: 'none' }}
        onLoad={() => setIsPosterLoaded(true)}
      />

      {/* Skeleton placeholder */}
      {!isPosterLoaded && (
        <div className="poster-skeleton" />
      )}

      {/* Controls */}
      <div className={`quality-dropdown ${hovered ? 'visible' : ''}`}>
        <Link to={`/exercise/${exercise.exerciseId}`} className="exercise-detail-link">🔍</Link>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => onEdit(exercise)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(exercise.$id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
        <button onClick={handleFullscreen} className="fullscreen-button" aria-label="Fullscreen">⛶</button>
        <select
          id="quality-select"
          value={quality}
          onChange={handleQualityChange}
          className="quality-select"
        >
          <option value="360p">360p</option>
          <option value="original">Original</option>
        </select>
      </div>

      {/* Exercise details */}
      <div className="exercise-details" style={{ padding: '10px' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px' 
        }}>
          {exercise.reps && <span><strong>Reps:</strong> {exercise.reps}</span>}
          {exercise.time && <span><strong>Time:</strong> {exercise.time}</span>}
          {exercise.load && <span><strong>Load:</strong> {exercise.load}</span>}
          {exercise.equipment && <span><strong>Equipment:</strong> {exercise.equipment}</span>}
          {exercise.notes && <div style={{ width: '100%', marginTop: '5px' }}><strong>Notes:</strong> {exercise.notes}</div>}
        </div>
      </div>

      {/* Info */}
      <div className="exercise-info">
        <p className="exercise-title">{exercise.exerciseTitle}</p>
        {(() => {
          const athleteObj = athletes.find(
            (a) => `${a.firstName} ${a.lastName}` === exercise.athlete
          );

          if (athleteObj) {
            return (
              <Link
                to={`/athlete/${athleteObj.slug}`}
                className="exercise-meta athlete-link"
              >
                {exercise.athlete} - {exercise.athletesSport}
              </Link>
            );
          }

          return (
            <p className="exercise-meta">
              {exercise.athlete} - {exercise.athletesSport}
            </p>
          );
        })()}
      </div>
    </div>
  );
};

export default WorkoutExerciseVideoCard;