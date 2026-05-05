import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import WorkoutReplaceVideoCard from './WorkoutReplaceVideoCard';
import SearchBar from './SearchBar';
import exercises from '../data/exercises';

const WorkoutReplaceExercises = ({ currentWorkout, onReplace, onCancel }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loadedExercises, setLoadedExercises] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const pageSize = 10;

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
    const filtered = exercises.filter((exercise) => matchesSearch(exercise, searchTerm));
    const newExercises = filtered.slice(0, page * pageSize);
    setLoadedExercises(newExercises);
    setHasMore(newExercises.length < filtered.length);
  }, [searchTerm, page]);

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

  return (
    <div className="workout-exercises">
      {/* Header sa Search i X dugmetom */}
      <div className="replace-header">
        <SearchBar value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }} />
        <button className="close-overlay-button" onClick={onCancel}>✖</button>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {loadedExercises.map((exercise) => (
          <WorkoutReplaceVideoCard
            key={exercise.id || exercise.$id}
            exercise={{
              ...exercise,
              id: exercise.id || exercise.$id,
              title: exercise.title || exercise.exerciseTitle,
              videoURL: exercise.videoURL || exercise.videoURL_360p,
              poster: exercise.poster || '/images/default.jpg'
            }}
            currentWorkout={currentWorkout}
            onReplace={onReplace}
          />
        ))}
      </Masonry>

      {hasMore && (
        <div ref={loaderRef} className="masonry-loader" />
      )}
    </div>
  );
};

export default WorkoutReplaceExercises;

