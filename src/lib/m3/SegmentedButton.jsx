import React from 'react';

const SegmentedButton = ({ 
  options, 
  selectedId, 
  onChange, 
  className = '' 
}) => {
  return (
    <div className={`m3-segmented-btn ${className}`} role="radiogroup">
      {options.map((option) => {
        const isSelected = selectedId === option.id;
        return (
          <button
            key={option.id}
            role="radio"
            aria-checked={isSelected}
            className={`m3-segmented-item ${isSelected ? 'selected' : ''}`}
            onClick={() => onChange(option.id)}
            tabIndex={isSelected ? 0 : -1}
          >
            <span className="state-layer"></span>
            {isSelected && (
              <span className="material-symbols-rounded" aria-hidden="true">
                check
              </span>
            )}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedButton;
