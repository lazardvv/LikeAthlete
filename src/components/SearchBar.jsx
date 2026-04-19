import React from 'react';


const SearchBar = ({ value, onChange, placeholder = "Search exercises..." }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;