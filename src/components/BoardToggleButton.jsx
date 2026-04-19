import React from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import './BoardToggleButton.css';

const BoardToggleButton = ({ isActive, onToggle }) => {
  return (
    <button
      className={`board-toggle-button ${isActive ? 'active' : ''}`}
      onClick={onToggle}
      title={isActive ? 'Sakrij Board Manager' : 'Prikaži Board Manager'}
    >
      {isActive ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
    </button>
  );
};

export default BoardToggleButton;
