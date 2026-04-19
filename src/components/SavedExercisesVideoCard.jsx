import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import athletes from '../data/athletes';
import { deleteSavedExercise } from '../../services/appwriteSavedExercises';
import BoardManager from './BoardManager';

const SavedExercisesVideoCard = ({ exercise, onRemove, onBoardUpdate, showBoardManager }) => {
  const videoRef = useRef(null);
  const loadedVideos = useRef({});
  const [quality, setQuality] = useState('360p');
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  const handleRemove = async () => {
    try {
      await deleteSavedExercise(exercise.$id);
      onRemove(exercise.$id);
    } catch (error) {
      console.error('Greška pri uklanjanju vježbe:', error);
      alert('Greška pri uklanjanju vježbe.');
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
      <video
        ref={videoRef}
        className="video-element"
        muted
        preload="metadata"
        poster={exercise.poster}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Delete and Fullscreen buttons in top-right corner */}
      <div className={`quality-dropdown ${hovered ? 'visible' : ''}`} style={{ flexDirection: 'row-reverse' }}>
        <button onClick={handleRemove} className="save-button" aria-label="Obriši">
          ❌ 
        </button>

        <button onClick={handleFullscreen} className="fullscreen-button" aria-label="Fullscreen">⛶</button>
      </div>

      {showBoardManager && (
        <BoardManager
          exerciseId={exercise.$id}
          onBoardChange={onBoardUpdate}
        />
      )}

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

export default SavedExercisesVideoCard;
