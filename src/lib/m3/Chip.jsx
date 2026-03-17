import React from 'react';

const Chip = ({ 
  label, 
  icon, 
  onClick, 
  onDelete, 
  selected = false,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`m3-chip ${selected ? 'selected' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="state-layer"></span>
      {icon && <span className="material-symbols-rounded">{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <span 
          className="material-symbols-rounded" 
          style={{ fontSize: '18px', marginLeft: '4px' }}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          close
        </span>
      )}
    </div>
  );
};

export default Chip;
