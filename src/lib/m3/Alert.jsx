import React from 'react';

const Alert = ({ 
  title, 
  children, 
  variant = 'info', 
  icon,
  onClose 
}) => {
  const icons = {
    info: 'info',
    success: 'check_circle',
    warning: 'warning',
    error: 'error'
  };

  const currentIcon = icon || icons[variant];

  return (
    <div className={`m3-alert ${variant}`}>
      <span className="material-symbols-rounded m3-alert-icon">{currentIcon}</span>
      <div className="m3-alert-content">
        {title && <span className="m3-alert-title">{title}</span>}
        <div className="m3-body-medium">{children}</div>
      </div>
      {onClose && (
        <button className="m3-alert-close" onClick={onClose}>
          <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>close</span>
        </button>
      )}
    </div>
  );
};

export default Alert;
