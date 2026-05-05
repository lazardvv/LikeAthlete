import React, { useState, useEffect, useRef, useMemo } from 'react';
import Masonry from 'react-masonry-css';
import VideoCard from '../components/VideoCard';
import SearchBar from '../components/SearchBar';
import exercises from '../data/exercises';

const Exercises = () => {
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

  // 🔍 Tokenizacija i normalizacija teksta
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
    const filtered = shuffledExercises.filter((exercise) => matchesSearch(exercise, searchTerm));
    const newExercises = filtered.slice(0, page * pageSize);
    setLoadedExercises(newExercises);
    setHasMore(newExercises.length < filtered.length);
  }, [searchTerm, page, shuffledExercises]);

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
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore]);

  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    900: 3,
    600: 2,
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  return (
    <div>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {loadedExercises.map((exercise) => (
          <VideoCard key={exercise.id} exercise={exercise} />
        ))}
      </Masonry>
      {hasMore && <div ref={loaderRef} style={{ height: '20px' }} />}
    </div>
  );
};

export default Exercises;
