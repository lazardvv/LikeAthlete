import React from 'react'

const ExerciseItem = ({
  exercise,
  index,
  editingExercise,
  editFormData,
  onEdit,
  onDelete,
  onEditFormChange,
  onSaveEdit,
  onCancelEdit,
  handleDragStart,
  handleDragOver,
  handleDrop
}) => (
  <li
    className="workout-list-item"
    draggable
    onDragStart={(e) => handleDragStart(e, index)}
    onDragOver={handleDragOver}
    onDrop={(e) => handleDrop(e, index)}
  >
    <div className="video-container">
      <video className="video-element" muted preload="metadata" poster={exercise.poster} controls>
        <source src={exercise.videoURL_360p} type="video/mp4" />
      </video>
    </div>
    <div className="exercise-details">
      <h3>{exercise.exerciseTitle}</h3>
      <p>{exercise.athlete} - {exercise.athletesSport}</p>

      {editingExercise === exercise.$id ? (
        <div className="edit-form">
          <div className="edit-form-grid">
            <div>
              <label>Reps:</label>
              <input type="text" name="reps" value={editFormData.reps} onChange={onEditFormChange} />
            </div>
            <div>
              <label>Time:</label>
              <input type="text" name="time" value={editFormData.time} onChange={onEditFormChange} />
            </div>
            <div>
              <label>Load:</label>
              <input type="text" name="load" value={editFormData.load} onChange={onEditFormChange} />
            </div>
          </div>
          <div>
            <label>Equipment:</label>
            <input type="text" name="equipment" value={editFormData.equipment} onChange={onEditFormChange} />
          </div>
          <div>
            <label>Notes:</label>
            <textarea name="notes" value={editFormData.notes} onChange={onEditFormChange} />
          </div>
          <div className="edit-form-buttons">
            <button className="save-button" onClick={onSaveEdit}>Save</button>
            <button className="cancel-button" onClick={onCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="exercise-attributes">
            {exercise.reps && <span><strong>Reps:</strong> {exercise.reps}</span>}
            {exercise.time && <span><strong>Time:</strong> {exercise.time}</span>}
            {exercise.load && <span><strong>Load:</strong> {exercise.load}</span>}
            {exercise.equipment && <span><strong>Equipment:</strong> {exercise.equipment}</span>}
            {exercise.notes && <div><strong>Notes:</strong> {exercise.notes}</div>}
          </div>
          <div className="exercise-actions">
            <button className="edit-button" onClick={() => onEdit(exercise)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(exercise.$id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
    <div className="drag-handle">⋮⋮</div>
  </li>
)

export default ExerciseItem
