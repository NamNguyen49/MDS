import React from 'react';

const Button = ({ 
  children, 
  variant = 'filled', 
  color = 'primary',   
  className = '',
  icon,
  ...props 
}) => {
  const variants = {
    filled: 'm3-btn-filled',
    outlined: 'm3-btn-outlined',
    tonal: 'm3-btn-tonal',
    text: 'm3-btn-text',
    elevated: 'm3-btn-elevated'
  };

  const colorClass = color !== 'primary' ? `m3-btn-${color}` : '';

  return (
    <button 
      className={`m3-btn ${variants[variant]} ${colorClass} ${className}`}
      {...props}
    >
      <span className="state-layer"></span>
      {icon && <span className="material-symbols-rounded">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
