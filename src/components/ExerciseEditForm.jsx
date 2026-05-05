import React from 'react'

const ExerciseEditForm = ({ 
  editFormData, 
  onEditFormChange, 
  onSaveEdit, 
  onCancelEdit, 
  exerciseId, 
  onReplace 
}) => (
  <div className="edit-form">
    {['reps','time','load','equipment'].map(field => (
      <div className="form-row" key={field}>
        <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
        <input 
          type={field === 'equipment' ? 'text' : 'number'} 
          name={field} 
          value={editFormData[field]} 
          min={field !== 'equipment' ? '0' : undefined}
          onChange={onEditFormChange} 
        />
      </div>
    ))}
    <div className="form-row">
      <label>Notes:</label>
      <textarea 
        name="notes" 
        value={editFormData.notes} 
        onChange={onEditFormChange} 
      />
    </div>
    <div className="edit-form-buttons">
      <button type="button" className="save-button" onClick={onSaveEdit}>Save</button>
      <button type="button" className="cancel-button" onClick={onCancelEdit}>Cancel</button>
      <button type="button" className="replace-button" onClick={() => onReplace(exerciseId)}>
        Replace
      </button>
    </div>
  </div>
)

export default ExerciseEditForm
