import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import exercises from '../data/exercises';
import VideoCard from '../components/VideoCard';

const ExerciseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quality, setQuality] = useState('360p');
  const [videoSrc, setVideoSrc] = useState('');

  const exercise = exercises.find((ex) => ex.id === parseInt(id));
  if (!exercise) return <p>Vježba nije pronađena.</p>;

  // Set initial video source when component mounts
  React.useEffect(() => {
    setVideoSrc(quality === '360p' ? exercise.videoURL_360p : exercise.videoURL);
  }, [exercise, quality]);

  const handleQualityChange = (e) => {
    const selectedQuality = e.target.value;
    setQuality(selectedQuality);
    setVideoSrc(selectedQuality === '360p' ? exercise.videoURL_360p : exercise.videoURL);
  };

  const getSimilarExercises = () => {
    const keywords = exercise.title.toLowerCase().split(' ');
    return exercises.filter((ex) => {
      if (ex.id === exercise.id) return false;
      return keywords.some((word) => ex.title.toLowerCase().includes(word));
    });
  };


  const similarExercises = getSimilarExercises();

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 2, // umjesto 1
    400: 2  // dodatni breakpoint za vrlo male ekrane
  };

  return (
    <div className="exercise-detail-container">
      <div className="exercise-detail-main">
        
        <div className="exercise-detail-video-container">
          <video
            src={videoSrc}
            poster={exercise.poster}
            controls
            className="exercise-detail-video"
          />
          <div className="exercise-detail-quality">
            <label htmlFor="quality-select">
              <i className="ri-settings-3-line"></i>
            </label>
            <select
              id="quality-select"
              value={quality}
              onChange={handleQualityChange}
              className="quality-select"
            >
              <option value="360p">360p</option>
              <option value="original">Original</option>
            </select>
          </div>
        </div>
        <div className="exercise-detail-info">
          <p>
            
            <h2 className="exercise-detail-title">{exercise.title}</h2>
          </p>
          <p>
            <i className="ri-user-star-line"></i>
            <strong>Athlete:</strong> {exercise.athlete}
          </p>
          <p>
            <i className="ri-basketball-line"></i>
            <strong>Athletes sport:</strong> {exercise.athletesSports}
          </p>
        </div>
      </div>

      <div className="exercise-detail-similar">
        <h3><i className="ri-links-line"></i>Similar</h3>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          
          {similarExercises.map((ex) => (
            <div
              key={ex.id}
              onClick={() => {
                navigate(`/exercise/${ex.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="similar-exercise-item"
            >
              <VideoCard exercise={ex} />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default ExerciseDetail;
