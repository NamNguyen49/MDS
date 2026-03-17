import React from 'react';

const Card = ({ 
  children, 
  variant = 'elevated', 
  className = '',
  onClick,
  ...props 
}) => {
  const variants = {
    elevated: 'm3-card-elevated',
    filled: 'm3-card-filled',
    outlined: 'm3-card-outlined'
  };

  return (
    <div 
      className={`m3-card-base ${variants[variant]} ${className} ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
      {...props}
    >
      {onClick && <span className="state-layer"></span>}
      {children}
    </div>
  );
};

export default Card;
