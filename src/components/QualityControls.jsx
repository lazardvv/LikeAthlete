// QualityControls.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

const QualityControls = ({
  exercise,
  hovered,
  open = false,
  quality,
  onQualityChange,
  onEdit,
  onDelete,
  onDuplicate
}) => (
  <div className={`quality-dropdown ${(hovered || open) ? 'visible' : ''}`}>
    
    {/* Desktop: Edit, Delete, Duplicate, Quality Select */}
    <div className="desktop-controls">
      {/* Parent već wrapuje funkcije, ovdje ih samo pozivamo */}
      <button onClick={onEdit} className="edit-button" aria-label="Uredi vježbu">
        ✏️ 
      </button>

      <button onClick={onDelete} className="delete-button" aria-label="Obriši vježbu">
        🗑️ 
      </button>

      {/* ⬅️ NOVO: Duplicate dugme */}
      <button onClick={onDuplicate} className="duplicate-button" aria-label="Dupliciraj vježbu">
        📄 
      </button>

      {/* Kontrola kvaliteta */}
      <label htmlFor="quality-select" className="sr-only">Kvalitet videa</label>
      <select
        id="quality-select"
        value={quality}
        onChange={onQualityChange}
        className="quality-select"
      >
        <option value="360p">360p</option>
        <option value="original">Original</option>
      </select>
    </div>

    {/* Mobile: Similar Exercises Button (replaces quality select) */}
    <div className="mobile-controls">
      <NavLink 
        to={`/exercise/${exercise.id || exercise.$id}`} 
        className="similar-button"
        aria-label="Pogledaj slične vježbe"
      >
        🔗
      </NavLink>
    </div>
  </div>
)

export default QualityControls