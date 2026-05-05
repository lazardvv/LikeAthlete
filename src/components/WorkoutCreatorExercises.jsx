import React, { useState, useEffect, useRef, useMemo } from 'react';
import Masonry from 'react-masonry-css';
import WorkoutCreatorVideoCard from './WorkoutCreatorVideoCard';
import SearchBar from './SearchBar';
import exercises from '../data/exercises';
import { useAuth } from '../context/AuthContext';
import { addExerciseToWorkout } from '../../services/appwriteWorkoutExercises';
import { getSavedExercises } from '../../services/appwriteSavedExercises';
import { getBoardsForUser, getExercisesForBoard } from '../../services/appwriteUserBoards';


const WorkoutCreatorExercises = ({ currentWorkout, onExerciseAdded }) => {
  const { user } = useAuth();
  const userId = user?.name;

  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loadedExercises, setLoadedExercises] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const pageSize = 10;

  const shuffledExercises = useMemo(() => {
    const arr = [...exercises];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const [exerciseSource, setExerciseSource] = useState('all');
  const [savedExercises, setSavedExercises] = useState([]);
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [loadingSavedExercises, setLoadingSavedExercises] = useState(false);

  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const normalize = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(' ').filter(Boolean);

  const matchesSearch = (exercise, term) => {
    const tokens = normalize(`${exercise.title} ${exercise.athlete} ${exercise.athletesSports}`);
    const searchTokens = normalize(term);
    return searchTokens.every((token) =>
      tokens.some((t) => t.includes(token))
    );
  };

  useEffect(() => {
    if (exerciseSource === 'all') {
      const filtered = shuffledExercises.filter((exercise) => matchesSearch(exercise, searchTerm));
      const newExercises = filtered.slice(0, page * pageSize);
      setLoadedExercises(newExercises);
      setHasMore(newExercises.length < filtered.length);
    }
  }, [searchTerm, page, exerciseSource, shuffledExercises]);

  useEffect(() => {
    const fetchSavedData = async () => {
      if (exerciseSource === 'saved' && userId) {
        setLoadingSavedExercises(true);
        try {
          const [saved, userBoards] = await Promise.all([
            getSavedExercises(userId),
            getBoardsForUser(userId),
          ]);
          setSavedExercises(saved);
          setBoards(userBoards);
          setSelectedBoard(null);
          setLoadedExercises(saved);
          setHasMore(false);
        } catch (error) {
          console.error('Greška pri dohvatanju saved vježbi:', error);
          setLoadedExercises([]);
        } finally {
          setLoadingSavedExercises(false);
        }
      }
    };
    fetchSavedData();
  }, [exerciseSource, userId]);

  const handleBoardSelect = async (boardName) => {
    if (!boardName) {
      setSelectedBoard(null);
      setLoadedExercises(savedExercises);
      return;
    }

    setSelectedBoard(boardName);
    try {
      const exerciseIds = await getExercisesForBoard(userId, boardName);
      const filtered = savedExercises.filter((ex) => exerciseIds.includes(ex.$id));
      setLoadedExercises(filtered.length > 0 ? filtered : savedExercises);
    } catch (error) {
      console.error('Greška pri filteriranju po boardu:', error);
      setLoadedExercises(savedExercises);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: '200px' }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasMore]);

  const breakpointColumnsObj = { default: 5, 1200: 4, 900: 3, 600: 2 };

  const [standardRest, setStandardRest] = useState(() => {
    const stored = localStorage.getItem('standardRest');
    return stored ? parseInt(stored, 10) : 10;
  });
  const [showRestPopup, setShowRestPopup] = useState(false);
  const [restSeconds, setRestSeconds] = useState(10);
  const [showSetStandardPopup, setShowSetStandardPopup] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleAddRestClick = () => {
    if (!currentWorkout) {
      showNotification('Please select or create a workout first', 'error');
      return;
    }
    setRestSeconds(standardRest || 10);
    setShowRestPopup(true);
  };

  const handleAddStandardRest = async (seconds) => {
    if (!userId || !currentWorkout) {
      showNotification('Please select a workout and be logged in', 'error');
      return;
    }

    const restExercise = {
      id: `rest-${Date.now()}`,
      title: `Rest ${seconds}s`,
      athlete: 'Rest',
      athletesSports: '',
      videoURL: '',
      videoURL_360p: '',
      poster: '/images/Rest.jpg',
      folderId: ''
    };

    try {
      const result = await addExerciseToWorkout(restExercise, userId, currentWorkout, {
        time: seconds,
        reps: null,
        load: null,
        equipment: '',
        notes: 'Rest period'
      });
      if (onExerciseAdded && result) onExerciseAdded(result);
      showNotification(`✅ Added ${seconds}s rest to ${currentWorkout}`, 'success');
    } catch (err) {
      console.error(err);
      showNotification('Failed to add rest to workout', 'error');
    }
  };

  const handleConfirmAddRest = async () => {
    setShowRestPopup(false);
    await handleAddStandardRest(restSeconds);
  };

  const handleSetStandardConfirm = () => {
    localStorage.setItem('standardRest', String(standardRest));
    setShowSetStandardPopup(false);
    showNotification(`✅ Standard rest set to ${standardRest}s`, 'success');
  };

  return (
    <div className="workout-exercises">
      {notification && (
        <div className={`notification-popup ${notification.type}`}>
          <p>{notification.message}</p>
        </div>
      )}

      <div className="exercise-source-buttons">
        <div className="exercise-source-toggle">
          <button 
            onClick={() => { setExerciseSource('all'); setSearchTerm(''); setPage(1); }}
            className={`source-button ${exerciseSource === 'all' ? 'active-all' : ''}`}
          >
            📚 Sve vježbe
          </button>
          <button 
            onClick={() => { setExerciseSource('saved'); setSearchTerm(''); setPage(1); }}
            className={`source-button ${exerciseSource === 'saved' ? 'active-saved' : ''}`}
          >
            ⭐ Moje vježbe
          </button>
        </div>

        <SearchBar value={searchTerm} onChange={handleSearchChange} />

        <div className="exercise-actions-bar">
          <button className="add-break-button" onClick={handleAddRestClick}>Add Break</button>
          <button className="add-standard-break-button" onClick={() => handleAddStandardRest(standardRest)}>
            Add Standard Break ({standardRest}s)
          </button>
          <button className="set-standard-break-button" onClick={() => setShowSetStandardPopup(true)}>
            Set Standard Break
          </button>
        </div>
      </div>

      {exerciseSource === 'saved' && boards.length > 0 && (
        <div className="board-filter">
          <label>Board:</label>
          <button onClick={() => handleBoardSelect(null)} className={`board-button ${selectedBoard === null ? 'active' : ''}`}>
            Sve
          </button>
          {boards.map((board) => (
            <button key={board} onClick={() => handleBoardSelect(board)} className={`board-button ${selectedBoard === board ? 'active' : ''}`}>
              {board}
            </button>
          ))}
        </div>
      )}

      {exerciseSource === 'saved' && loadingSavedExercises && (
        <div className="loading-indicator"><p>Učitavam moje vježbe...</p></div>
      )}

      {!loadingSavedExercises && loadedExercises.length === 0 && (
        <div className="no-exercises"><p>Nema pronađenih vježbi</p></div>
      )}

            <Masonry 
        breakpointCols={breakpointColumnsObj} 
        className="masonry-grid" 
        columnClassName="masonry-grid_column"
      >
        {loadedExercises.map((exercise) => (
          <WorkoutCreatorVideoCard 
            key={exercise.id || exercise.$id} 
            exercise={{
              ...exercise,
              id: exercise.id || exercise.$id,
              title: exercise.title || exercise.exerciseTitle,
              videoURL: exercise.videoURL || exercise.videoURL_360p,
              poster: exercise.poster || '/images/default.jpg'
            }} 
            currentWorkout={currentWorkout}
            onAddedToWorkout={onExerciseAdded}
          />
        ))}
      </Masonry>

      {hasMore && exerciseSource === 'all' && (
        <div ref={loaderRef} className="masonry-loader" />
      )}

      {/* Add Rest Popup */}
      {showRestPopup && (
        <div className="modal-overlay" onClick={() => setShowRestPopup(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add Break to {currentWorkout}</h3>
            <div className="modal-row">
              <label>Seconds:</label>
              <input 
                type="number" 
                min="1" 
                value={restSeconds} 
                onChange={(e) => setRestSeconds(parseInt(e.target.value || '0', 10))} 
              />
            </div>
            <div className="modal-actions">
              <button className="save-button" onClick={handleConfirmAddRest}>Add Break</button>
              <button className="cancel-button" onClick={() => setShowRestPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Set Standard Rest Popup */}
      {showSetStandardPopup && (
        <div className="modal-overlay" onClick={() => setShowSetStandardPopup(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Set Standard Break</h3>
            <div className="modal-row">
              <label>Seconds:</label>
              <input 
                type="number" 
                min="1" 
                value={standardRest} 
                onChange={(e) => setStandardRest(parseInt(e.target.value || '0', 10))} 
              />
            </div>
            <div className="modal-actions">
              <button className="save-button" onClick={handleSetStandardConfirm}>Save</button>
              <button className="cancel-button" onClick={() => setShowSetStandardPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutCreatorExercises;
