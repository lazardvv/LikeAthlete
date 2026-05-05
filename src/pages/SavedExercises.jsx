import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import SavedExercisesVideoCard from '../components/SavedExercisesVideoCard';
import BoardFilter from '../components/BoardFilter';
import { getSavedExercises } from '../../services/appwriteSavedExercises';
import {
  getBoardsForUser,
  getExercisesForBoard,
} from '../../services/appwriteUserBoards';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import BoardToggleButton from '../components/BoardToggleButton';

const SavedExercises = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  const userId = user?.name;

  const [savedExercises, setSavedExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [boards, setBoards] = useState([]);
  const [activeBoard, setActiveBoard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [showBoardManager, setShowBoardManager] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [exercises, boardList] = await Promise.all([
          getSavedExercises(userId),
          getBoardsForUser(userId),
        ]);
        setSavedExercises(exercises);
        setBoards(boardList);
        setFilteredExercises(exercises);
        setActiveBoard(null);
      } catch (error) {
        console.error('Greška pri dohvatanju podataka:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [userId]);

  useEffect(() => {
    if (!loading && filteredExercises.length > 0) {
      setVisibleCount(filteredExercises.length <= 20 ? filteredExercises.length : 10);
    }
  }, [loading, filteredExercises]);

  useEffect(() => {
    if (filteredExercises.length <= 20 || visibleCount >= filteredExercises.length) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetchingMore) {
        setIsFetchingMore(true);
        setTimeout(() => {
          setVisibleCount((prev) => Math.min(prev + 10, filteredExercises.length));
          setIsFetchingMore(false);
        }, 500);
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [filteredExercises, visibleCount, isFetchingMore]);

  const handleRemove = (id) => {
    setSavedExercises((prev) => prev.filter((ex) => ex.$id !== id));
    setFilteredExercises((prev) => prev.filter((ex) => ex.$id !== id));
  };

  const handleBoardUpdate = async () => {
    try {
      const updatedBoards = await getBoardsForUser(userId);
      setBoards(updatedBoards);

      if (activeBoard) {
        if (!updatedBoards.includes(activeBoard)) {
          setActiveBoard(null);
          setFilteredExercises(savedExercises);
          return;
        }

        const exerciseIds = await getExercisesForBoard(userId, activeBoard);
        const filtered = savedExercises.filter((ex) => exerciseIds.includes(ex.$id));

        if (filtered.length === 0) {
          setActiveBoard(null);
          setFilteredExercises(savedExercises);
        } else {
          setFilteredExercises(filtered);
        }
      }
    } catch (error) {
      console.error('Greška pri osvježavanju boardova:', error);
    }
  };

  const handleBoardSelect = async (boardName) => {
    setActiveBoard(boardName);

    if (!boardName) {
      setFilteredExercises(savedExercises);
      return;
    }

    try {
      const exerciseIds = await getExercisesForBoard(userId, boardName);
      const filtered = savedExercises.filter((ex) => exerciseIds.includes(ex.$id));

      if (filtered.length === 0) {
        setActiveBoard(null);
        setFilteredExercises(savedExercises);
      } else {
        setFilteredExercises(filtered);
      }
    } catch (error) {
      console.error('Greška pri filtriranju vježbi:', error);
    }
  };

  const visibleExercises = filteredExercises.slice(0, visibleCount);
  const breakpointColumnsObj = { default: 5, 1200: 4, 900: 3, 600: 2 };

  return (
    <div>
      <div className='board-toggle-button-div'>
        <BoardToggleButton
          isActive={showBoardManager}
          onToggle={() => setShowBoardManager((prev) => !prev)}
        />
      </div>

      <BoardFilter
        boards={boards}
        activeBoard={activeBoard}
        onSelectBoard={handleBoardSelect}
      />

      {loading ? (
        <p style={{ textAlign: 'center' }}>Učitavanje...</p>
      ) : filteredExercises.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nema sačuvanih vježbi.</p>
      ) : (
        <>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {visibleExercises.map((exercise) => (
              <SavedExercisesVideoCard
                key={exercise.$id}
                exercise={exercise}
                onRemove={handleRemove}
                onBoardUpdate={handleBoardUpdate}
                showBoardManager={showBoardManager}
              />
            ))}
          </Masonry>

          {filteredExercises.length > 20 && visibleCount < filteredExercises.length && (
            <>
              <div ref={loaderRef} style={{ height: '20px' }} />
              {isFetchingMore && (
                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                  Učitavanje dodatnih vježbi...
                </p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SavedExercises;
