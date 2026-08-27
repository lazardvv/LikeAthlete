import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FullScreenVideoModal from './FullScreenVideoModal';
import athletes from '../data/athletes';

const WorkoutReplaceVideoCard = ({ exercise, currentWorkout, onReplace }) => {
  const videoRef = useRef(null);
  const loadedVideos = useRef({});
  const [quality, setQuality] = useState('360p');
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState({ reps: '', time: '', load: '', equipment: '', notes: '' });

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq ? mq.matches : window.innerWidth <= 768);
    update();
    if (mq && mq.addEventListener) mq.addEventListener('change', update);
    window.addEventListener('resize', update);
    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener('change', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.src = exercise.videoURL_360p;
      loadedVideos.current[exercise.videoURL_360p] = true;
    }
  }, [isVisible, exercise.videoURL_360p]);

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'reps' || name === 'time' || name === 'load') && value !== '') {
      const intValue = parseInt(value, 10);
      if (isNaN(intValue)) return;
      setDetails(prev => ({ ...prev, [name]: intValue }));
    } else {
      setDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleConfirmReplace = async () => {
    try {
      await onReplace(exercise, details);
      setShowPopup(false);
    } catch (error) {
      console.error('Error replacing exercise:', error);
      alert('Failed to replace exercise. Please try again.');
    }
  };

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
      if (videoRef.current.requestFullscreen) videoRef.current.requestFullscreen();
      else if (videoRef.current.webkitRequestFullscreen) videoRef.current.webkitRequestFullscreen();
      else if (videoRef.current.mozRequestFullScreen) videoRef.current.mozRequestFullScreen();
      else if (videoRef.current.msRequestFullscreen) videoRef.current.msRequestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <>
      <div className="exercise-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button onClick={(e) => { e.stopPropagation(); setShowModal(true); }} className="preview-button" aria-label="Preview">📺</button>

        <video
          ref={videoRef}
          className="video-element"
          muted
          preload="metadata"
          poster={exercise.poster}
          style={{ width: '100%', height: 'auto', objectFit: 'contain', display: isPosterLoaded ? 'block' : 'none' }}
        >
          Your browser does not support the video tag.
        </video>

        <img src={exercise.poster} alt="poster loader" style={{ display: 'none' }} onLoad={() => setIsPosterLoaded(true)} />
        {!isPosterLoaded && <div className="poster-skeleton" />}

        <div className={`quality-dropdown ${hovered ? 'visible' : ''}`}>
          <NavLink to={`/exercise/${exercise.id}`} className="exercise-detail-link">🔍</NavLink>
          <button onClick={() => setShowPopup(true)} className="replace-button" disabled={!currentWorkout}>🔄 Replace Exercise</button>
          <button onClick={handleFullscreen} className="fullscreen-button" aria-label="Fullscreen">⛶</button>
          <select id="quality-select" value={quality} onChange={handleQualityChange} className="quality-select">
            <option value="360p">360p</option>
            <option value="original">Original</option>
          </select>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content workout-details-popup">
              <h3>Replace in Workout: {currentWorkout}</h3>
              <div className="workout-details-form">
                <div className="form-group"><label>Reps:</label><input type="number" name="reps" value={details.reps} onChange={handleDetailChange} /></div>
                <div className="form-group"><label>Time:</label><input type="number" name="time" value={details.time} onChange={handleDetailChange} /></div>
                <div className="form-group"><label>Load:</label><input type="number" name="load" value={details.load} onChange={handleDetailChange} /></div>
                <div className="form-group"><label>Equipment:</label><input type="text" name="equipment" value={details.equipment} onChange={handleDetailChange} /></div>
                <div className="form-group"><label>Notes:</label><textarea name="notes" value={details.notes} onChange={handleDetailChange}></textarea></div>
              </div>
              <div className="popup-buttons">
                <button onClick={handleConfirmReplace} className="btn-secondary">Replace</button>
                <button onClick={() => setShowPopup(false)} className="btn-primary">Cancel</button>
              </div>
            </div>
          </div>
        )}

        <div className="exercise-info">
          <p className="exercise-title">{exercise.title}</p>
          {(() => {
            const athleteObj = athletes.find((a) => `${a.firstName} ${a.lastName}` === exercise.athlete);
            return athleteObj ? (
              <Link to={`/athlete/${athleteObj.slug}`} className="exercise-meta athlete-link">
                {exercise.athlete} - {exercise.athletesSports}
              </Link>
            ) : (
              <p className="exercise-meta">{exercise.athlete} - {exercise.athletesSports}</p>
            );
          })()}
        </div>
      </div>

      {showModal && (
        <FullScreenVideoModal exercise={exercise} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default WorkoutReplaceVideoCard;
