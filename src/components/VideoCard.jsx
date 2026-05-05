import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import athletes from '../data/athletes';
import { saveExercise, getSavedExercises } from '../../services/appwriteSavedExercises';
import { useAuth } from '../context/AuthContext';

const VideoCard = ({ exercise }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { user } = useAuth();
  const userId = user?.name;
  const videoRef = useRef(null);
  const mediaRef = useRef(null);
  const loadedVideos = useRef({});
  const [quality, setQuality] = useState('360p');
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
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

  useEffect(() => {
    const checkIfSaved = async () => {
      try {
        if (!userId) return;
        const saved = await getSavedExercises(userId);
        const alreadySaved = saved.some((ex) => ex.exerciseId === exercise.id);
        setIsSaved(alreadySaved);
      } catch (error) {
        console.error('Greška pri provjeri sačuvanih vježbi:', error);
      }
    };

    if (userId) {
      checkIfSaved();
    }
  }, [exercise.id, userId]);

  const handleSave = async () => {
    try {
      if (!userId) {
        alert('Morate biti prijavljeni da biste sačuvali vježbu.');
        return;
      }

      const result = await saveExercise(exercise, userId);
      if (!result) {
        alert('Vježba je već sačuvana.');
        return;
      }
      alert('Vježba je sačuvana!');
      setIsSaved(true);
    } catch (error) {
      alert('Greška pri čuvanju vježbe.');
      console.error(error);
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (!isMegaVideo && videoRef.current) {
      videoRef.current.controls = true;
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (!isMegaVideo && videoRef.current) {
      videoRef.current.controls = false;
    }
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
      onTouchStart={() => { setHovered(true); }}
    >
      {/* Video element */}
      {isMegaVideo ? (
        <div className="iframe-wrapper" ref={mediaRef}>
          <iframe
            className="video-iframe"
            title={exercise.title}
            src={isVisible ? selectedSource : ''}
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        <>
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
        </>
      )}

      {/* Controls */}
      <div className={`quality-dropdown ${hovered ? 'visible' : ''}`}>
        <NavLink to={`/exercise/${exercise.id}`} className="exercise-detail-link">🔍</NavLink>
        {isSaved ? (
          <button disabled className="saved-button" aria-label="Sačuvano">✅</button>
        ) : (
          <button onClick={handleSave} className="save-button" aria-label="Sačuvaj vježbu">💾</button>
        )}
        <button onClick={handleFullscreen} className="fullscreen-button" aria-label="Fullscreen">⛶</button>
        {!isMegaVideo && (
          <>
            <label htmlFor="quality-select" className="sr-only">Kvalitet videa</label>
            <select
              id="quality-select"
              value={quality}
              onChange={handleQualityChange}
              className="quality-select"
            >
              <option value="360p">360p</option>
              <option value="original">Original</option>
            </select>
          </>
        )}
      </div>

      {/* Info */}
      <div className="exercise-info">
        <p className="exercise-title">{exercise.title}</p>
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
                {exercise.athlete} - {exercise.athletesSports}
              </Link>
            );
          }

          return (
            <p className="exercise-meta">
              {exercise.athlete} - {exercise.athletesSports}
            </p>
          );
        })()}
      </div>
    </div>
  );
};

export default VideoCard;
