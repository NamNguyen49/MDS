import React from 'react';

const SegmentedButton = ({ 
  options, 
  selectedId, 
  onChange, 
  className = '' 
}) => {
  return (
    <div className={`m3-segmented-btn ${className}`}>
      {options.map((option) => (
        <button
          key={option.id}
          className={`m3-segmented-item ${selectedId === option.id ? 'selected' : ''}`}
          onClick={() => onChange(option.id)}
        >
          <span className="state-layer"></span>
          {selectedId === option.id && <span className="material-symbols-rounded">check</span>}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SegmentedButton;
