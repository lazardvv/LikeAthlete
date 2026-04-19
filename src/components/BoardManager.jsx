import React, { useState, useEffect } from 'react';
import {
  addExerciseToBoard,
  getBoardsForUser,
  getBoardsForExercise,
  removeExerciseFromBoard,
} from '../../services/appwriteUserBoards';
import { useAuth } from '../context/AuthContext';

const BoardManager = ({ exerciseId, onBoardChange }) => {
  const { user } = useAuth();
  const userId = user?.name;

  const [boards, setBoards] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBoards = async () => {
    if (!userId) return;
    try {
      const result = await getBoardsForExercise(userId, exerciseId);
      setBoards(result);
    } catch (error) {
      console.error('Greška pri dohvatanju boardova za vježbu:', error);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, [userId, exerciseId]);

  const handleAddBoard = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      await addExerciseToBoard(userId, exerciseId, input.trim());
      setInput('');
      await fetchBoards();
      if (onBoardChange) onBoardChange();
    } catch (error) {
      alert('Greška pri dodavanju boarda.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveBoard = async (boardName) => {
    setLoading(true);
    try {
      await removeExerciseFromBoard(userId, exerciseId, boardName);
      await fetchBoards();
      if (onBoardChange) onBoardChange();
    } catch (error) {
      alert('Greška pri uklanjanju boarda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="board-manager">
      <div className="board-list">
        {boards.map((board) => (
          <span key={board} className="board-tag">
            {board}
            <button onClick={() => handleRemoveBoard(board)} disabled={loading}>❌</button>
          </span>
        ))}
      </div>
      <div className="board-input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add to board"
          disabled={loading}
          className='board-input-text'
        />
        <button onClick={handleAddBoard} disabled={loading}>➕</button>
      </div>
    </div>
  );
};

export default BoardManager;
