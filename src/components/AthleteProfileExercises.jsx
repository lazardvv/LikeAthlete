import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import VideoCard from '../components/VideoCard';
import exercises from '../data/exercises';

const AthleteProfileExercises = ({ athlete }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 10);
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    900: 3,
    600: 2,
  };

 
const filteredExercises = exercises.filter(
    (exercise) => exercise.athlete === `${athlete.firstName} ${athlete.lastName}`
  );


  const visibleExercises = filteredExercises.slice(0, visibleCount);

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {visibleExercises.map((exercise) => (
          <VideoCard key={exercise.id} exercise={exercise} />
        ))}
      </Masonry>
      <div ref={loaderRef} style={{ height: '20px' }} />
    </div>
  );
};

export default AthleteProfileExercises;
