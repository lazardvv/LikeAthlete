import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import athletes from '../data/athletes';
import { deleteSavedExercise } from '../../services/appwriteSavedExercises';
import BoardManager from './BoardManager';

const SavedExercisesVideoCard = ({ exercise, onRemove, onBoardUpdate, showBoardManager }) => {
  const videoRef = useRef(null);
  const mediaRef = useRef(null);
  const loadedVideos = useRef({});
  const [quality, setQuality] = useState('360p');
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isMegaVideoUrl = (url) => typeof url === 'string' && /mega\.nz\/(file|embed)\//.test(url);
  const getMegaEmbedUrl = (url) => {
    if (!url || typeof url !== 'string') return url;
    if (url.includes('mega.nz/embed/')) return url;
    return url.replace(/mega\.nz\/file\//, 'mega.nz/embed/');
  };

  const isMegaVideo = isMegaVideoUrl(exercise.videoURL) || isMegaVideoUrl(exercise.videoURL_360p);
  const selectedSource = isMegaVideo
    ? getMegaEmbedUrl(exercise.videoURL || exercise.videoURL_360p)
    : quality === '360p'
      ? exercise.videoURL_360p
      : exercise.videoURL;

  const handleMouseEnter = () => {
    setHovered(true);
    if (!isMegaVideo && videoRef.current) videoRef.current.controls = true;
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (!isMegaVideo && videoRef.current) videoRef.current.controls = false;
  };

  const handleQualityChange = (e) => {
    if (isMegaVideo) return;

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
    const target = isMegaVideo ? mediaRef.current : videoRef.current;
    if (!target) return;

    if (!isFullscreen) {
      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
      } else if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen();
      } else if (target.msRequestFullscreen) {
        target.msRequestFullscreen();
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

    const target = isMegaVideo ? mediaRef.current : videoRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMegaVideo]);

  useEffect(() => {
    if (isVisible && !isMegaVideo && videoRef.current) {
      videoRef.current.src = exercise.videoURL_360p;
      loadedVideos.current[exercise.videoURL_360p] = true;
    }
  }, [isVisible, exercise.videoURL_360p, isMegaVideo]);

  return (
    <div
      className="exercise-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMegaVideo ? (
        <div className="iframe-wrapper" ref={mediaRef}>
          <iframe
            className="video-iframe"
            title={exercise.exerciseTitle}
            src={isVisible ? selectedSource : ''}
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
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
      )}

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
