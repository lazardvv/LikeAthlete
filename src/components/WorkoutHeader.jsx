import React from 'react'

const WorkoutHeader = ({ currentWorkout, viewMode, onToggleView, onStartWorkout, durationText, onDuplicateWorkout }) => (
  <div className="workout-header">
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '10px', width: '100%' }}>
      <h2 style={{ margin: 0 }}>Exercises in {currentWorkout}</h2>
      {durationText && (
        <div style={{ fontSize: '14px', color: '#555' }}>Estimated duration: <strong>{durationText}</strong></div>
      )}
    </div>
    <div className="workout-buttons">
      <button className="toggle-view-button" onClick={onToggleView}>
        {viewMode === 'grid' ? 'Show List View' : 'Show Grid View'}
      </button>
      <button className="start-workout-button" onClick={onStartWorkout}>
        Start Workout
      </button>
      <button className="duplicate-workout-button" onClick={onDuplicateWorkout}>
        Duplicate Workout
      </button>
    </div>
  </div>
)

export default WorkoutHeader
