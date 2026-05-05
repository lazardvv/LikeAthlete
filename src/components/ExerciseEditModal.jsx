// components/ExerciseEditModal.jsx
import React from 'react';

const ExerciseEditModal = ({
  isOpen,
  onClose,
  editFormData,
  onEditFormChange,
  onSaveEdit,
  onReplaceClick, // opcionalno: dugme za Replace koje otvara tvoj postojeći replace overlay
  exerciseTitle,  // samo radi headera
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content workout-details-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Uredi vježbu{exerciseTitle ? `: ${exerciseTitle}` : ''}</h3>
        <div className="workout-details-form">
          {['reps','time','load','equipment'].map((field) => (
            <div className="form-group" key={field}>
              <label >{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type={field === 'equipment' ? 'text' : 'number'}
                name={field}
                value={editFormData[field]}
                min={field !== 'equipment' ? '0' : undefined}
                onChange={onEditFormChange}
              />
            </div>
          ))}

          <div className="form-group">
            <label>Notes:</label>
            <textarea
              name="notes"
              value={editFormData.notes}
              onChange={onEditFormChange}
            />
          </div>
        </div>

        <div className="modal-actions">
          <button className="save-button" onClick={onSaveEdit}>Save</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>

          {onReplaceClick && (
            <button className="replace-button" onClick={onReplaceClick}>
              Replace
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseEditModal;