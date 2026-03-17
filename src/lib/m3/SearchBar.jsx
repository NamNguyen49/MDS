import React from 'react';

const SearchBar = ({ value, onChange, placeholder = 'Search...', className = '', leadingIcon = 'search', trailingIcon = 'account_circle' }) => {
  return (
    <div className={`m3-search-bar ${className}`}>
      <span className="material-symbols-rounded leading">{leadingIcon}</span>
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        className="search-input"
      />
      {trailingIcon && <span className="material-symbols-rounded trailing">{trailingIcon}</span>}
    </div>
  );
};

export default SearchBar;
