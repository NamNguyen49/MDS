import React from 'react';

const FAB = ({ 
  icon, 
  label, 
  onClick, 
  size = 'medium', 
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`m3-fab m3-fab-${size} ${label ? 'm3-fab-extended' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="state-layer"></span>
      <span className="material-symbols-rounded">{icon}</span>
      {label && <span className="m3-fab-label">{label}</span>}
    </button>
  );
};

export default FAB;
