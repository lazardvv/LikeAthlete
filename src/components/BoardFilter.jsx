import React from 'react';
import './BoardFilter.css';

const BoardFilter = ({ boards, activeBoard, onSelectBoard }) => {
  if (!boards || boards.length === 0) return null;

  return (
    <div className="board-filter-container">
      <button
        className={`board-filter-button ${!activeBoard ? 'active' : ''}`}
        onClick={() => onSelectBoard(null)}
      >
        Sve
      </button>
      {boards.map((board) => (
        <button
          key={board}
          className={`board-filter-button ${activeBoard === board ? 'active' : ''}`}
          onClick={() => onSelectBoard(board)}
        >
          {board}
        </button>
      ))}
    </div>
  );
};

export default BoardFilter;
