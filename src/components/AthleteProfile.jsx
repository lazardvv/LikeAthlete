import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import athletes from '../data/athletes';
import AthleteInfo from './AthleteInfo';
import MediaMasonryShower from './MediaMasonryShower';
import AthleteProfileExercises from './AthleteProfileExercises';

const AthleteProfile = () => {
  const { slug } = useParams();
  const athlete = athletes.find((a) => a.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]); // skroluj kad se promijeni slug


  if (!athlete) return <p>Athlete not found.</p>;

  return (
    <div>
      <AthleteInfo athlete={athlete} />
      <MediaMasonryShower athlete={athlete} />
      <AthleteProfileExercises athlete={athlete} />
    </div>
  );
};

export default AthleteProfile;