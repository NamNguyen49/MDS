import React from 'react';

const Badge = ({ 
  content, 
  children, 
  variant = 'small', 
  className = '' 
}) => {
  return (
    <div className={`m3-badge-container ${className}`}>
      {children}
      <span className={`m3-badge m3-badge-${variant}`}>
        {variant === 'large' && content}
      </span>
    </div>
  );
};

export default Badge;
