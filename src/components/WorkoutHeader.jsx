import React from 'react'

const WorkoutHeader = ({ currentWorkout, viewMode, onToggleView, onStartWorkout, durationText, onDuplicateWorkout }) => (
  <div className="workout-header">
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '10px', width: '100%', flexWrap: 'wrap' }}>
      <h2 style={{ margin: 0, flex: 1, minWidth: '200px' }}>Exercises in {currentWorkout}</h2>
      {durationText && (
        <div className="workout-duration-display">
          <span className="workout-duration-label">⏱️ Estimated:</span>
          <span className="workout-duration-value">{durationText}</span>
        </div>
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
        📋 Duplicate Workout
      </button>
    </div>
  </div>
)

export default WorkoutHeader
