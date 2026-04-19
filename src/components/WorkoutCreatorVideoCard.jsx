import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import athletes from '../data/athletes';
import { getSavedExercises } from '../../services/appwriteSavedExercises';
import { addExerciseToWorkout } from '../../services/appwriteWorkoutExercises';
import { useAuth } from '../context/AuthContext';

const WorkoutCreatorVideoCard = ({ exercise, currentWorkout, onAddedToWorkout }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { user } = useAuth();
  const userId = user?.name;
  const videoRef = useRef(null);
  const loadedVideos = useRef({});
  const [quality, setQuality] = useState('360p');
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showWorkoutPopup, setShowWorkoutPopup] = useState(false);
  const [notification, setNotification] = useState(null);
  const [workoutDetails, setWorkoutDetails] = useState({
    reps: '',
    time: '',
    load: '',
    equipment: '',
    notes: ''
  });

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

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
    if (userId) checkIfSaved();
  }, [exercise.id, userId]);

  const handleAddToWorkout = () => {
    if (!userId) {
      showNotification('Morate biti prijavljeni da biste dodali vježbu u trening.', 'error');
      return;
    }
    if (!currentWorkout) {
      showNotification('Morate prvo odabrati ili kreirati trening.', 'error');
      return;
    }
    setShowWorkoutPopup(true);
  };

  const handleWorkoutDetailChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'reps' || name === 'time' || name === 'load') && value !== '') {
      const intValue = parseInt(value, 10);
      if (isNaN(intValue)) return;
      setWorkoutDetails(prev => ({ ...prev, [name]: intValue }));
    } else {
      setWorkoutDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddExerciseToWorkout = async () => {
    try {
      if (!userId || !currentWorkout) return;
      const processedDetails = { ...workoutDetails };

      processedDetails.reps = processedDetails.reps === '' ? null : parseInt(processedDetails.reps, 10);
      processedDetails.time = processedDetails.time === '' ? null : parseInt(processedDetails.time, 10);
      processedDetails.load = processedDetails.load === '' ? null : parseInt(processedDetails.load, 10);

      const result = await addExerciseToWorkout(exercise, userId, currentWorkout, processedDetails);

      showNotification('✅ Vježba je uspješno dodana u trening!', 'success');
      setShowWorkoutPopup(false);

      if (onAddedToWorkout && result) {
        try { onAddedToWorkout(result); } catch (e) { console.error(e); }
      }

      setWorkoutDetails({ reps: '', time: '', load: '', equipment: '', notes: '' });
    } catch (error) {
      showNotification('Greška pri dodavanju vježbe u trening.', 'error');
      console.error(error);
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

  return (
    <div className="exercise-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video ref={videoRef} className="video-element" muted preload="metadata" poster={exercise.poster}>
        Your browser does not support the video tag.
      </video>

      <img src={exercise.poster} alt="poster loader" style={{ display: 'none' }} onLoad={() => setIsPosterLoaded(true)} />
      {!isPosterLoaded && <div className="poster-skeleton" />}

      <div className={`quality-dropdown ${hovered ? 'visible' : ''}`}>
        <NavLink to={`/exercise/${exercise.id}`} className="exercise-detail-link">🔍</NavLink>
        <button onClick={handleAddToWorkout} className="add-to-workout-button" disabled={!currentWorkout}>
          ➕ 
        </button>
        <button onClick={handleFullscreen} className="fullscreen-button" aria-label="Fullscreen">⛶</button>
        <select id="quality-select" value={quality} onChange={handleQualityChange} className="quality-select">
          <option value="360p">360p</option>
          <option value="original">Original</option>
        </select>
      </div>

      {notification && (
        <div className={`notification-popup ${notification.type}`}>
          <p>{notification.message}</p>
        </div>
      )}

      {showWorkoutPopup && (
        <div className="popup-overlay">
          <div className="popup-content workout-details-popup">
            <h3>Add to Workout: {currentWorkout}</h3>
            <div className="workout-details-form">
              <div className="form-group"><label>Reps:</label><input type="number" name="reps" value={workoutDetails.reps} onChange={handleWorkoutDetailChange} /></div>
              <div className="form-group"><label>Time:</label><input type="number" name="time" value={workoutDetails.time} onChange={handleWorkoutDetailChange} /></div>
              <div className="form-group"><label>Load:</label><input type="number" name="load" value={workoutDetails.load} onChange={handleWorkoutDetailChange} /></div>
              <div className="form-group"><label>Equipment:</label><input type="text" name="equipment" value={workoutDetails.equipment} onChange={handleWorkoutDetailChange} /></div>
              <div className="form-group"><label>Notes:</label><textarea name="notes" value={workoutDetails.notes} onChange={handleWorkoutDetailChange}></textarea></div>
            </div>
            <div className="popup-buttons">
              <button onClick={handleAddExerciseToWorkout}>Add to Workout</button>
              <button onClick={() => setShowWorkoutPopup(false)}>Cancel</button>
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
  );
};

export default WorkoutCreatorVideoCard;
