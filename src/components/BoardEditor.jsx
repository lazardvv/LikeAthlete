import React, { useState } from 'react';
import { databases } from '../../services/appwriteConfig';

const DATABASE_ID = '68e4b6460001f8b0b89d';
const COLLECTION_ID = 'saved_exercises';

const BoardEditor = ({ exerciseId, currentBoard, onBoardSaved }) => {
  const [boardInput, setBoardInput] = useState(currentBoard || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, exerciseId, {
        userBoard: boardInput,
      });
      setIsEditing(false);
      onBoardSaved(boardInput); // obavijesti roditelja
    } catch (error) {
      console.error('Greška pri čuvanju boarda:', error);
      alert('Greška pri čuvanju boarda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="board-editor-container">
      {isEditing ? (
        <div className="board-editor-form">
          <input
            type="text"
            value={boardInput}
            onChange={(e) => setBoardInput(e.target.value)}
            placeholder="npr. legs, shoulders"
            className="board-input"
            disabled={loading}
          />
          <button onClick={handleSave} disabled={loading} className="board-save-button">
            💾 Sačuvaj
          </button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)} className="board-edit-toggle">
          📋 Dodaj Board
        </button>
      )}
    </div>
  );
};

export default BoardEditor;
