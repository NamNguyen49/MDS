import React from 'react';

const IconButton = ({ 
  icon, 
  variant = 'standard', 
  onClick, 
  className = '',
  disabled,
  ...props 
}) => {
  const variants = {
    standard: 'm3-icon-btn-standard',
    filled: 'm3-icon-btn-filled',
    tonal: 'm3-icon-btn-tonal',
    outlined: 'm3-icon-btn-outlined'
  };

  return (
    <button 
      className={`m3-icon-btn ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="state-layer"></span>
      <span className="material-symbols-rounded">{icon}</span>
    </button>
  );
};

export default IconButton;
