// ExerciseInfo.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import athletes from '../data/athletes'

const ExerciseInfo = ({ exercise }) => {
  const athleteObj = athletes.find(
    (a) => `${a.firstName} ${a.lastName}` === exercise.athlete
  )

  return (
    <>
      <p className="exercise-title">{exercise.exerciseTitle}</p>
      {athleteObj ? (
        <Link to={`/athlete/${athleteObj.slug}`} className="exercise-meta athlete-link">
          {exercise.athlete} - {exercise.athletesSport}
        </Link>
      ) : (
        <p className="exercise-meta">{exercise.athlete} - {exercise.athletesSport}</p>
      )}
      <div className="exercise-details">
        {exercise.reps && <p><strong>Reps:</strong> {exercise.reps}</p>}
        {exercise.time && <p><strong>Time:</strong> {exercise.time}</p>}
        {exercise.load && <p><strong>Load:</strong> {exercise.load}</p>}
        {exercise.equipment && <p><strong>Equipment:</strong> {exercise.equipment}</p>}
        {exercise.notes && <p><strong>Notes:</strong> {exercise.notes}</p>}
      </div>
    </>
  )
}

export default ExerciseInfo
