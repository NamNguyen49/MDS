import React from 'react';

const ProgressBar = ({ 
  value, 
  variant = 'linear',
  className = '' 
}) => {
  if (variant === 'circular') {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className={`m3-progress-circular ${className}`}>
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle className="m3-progress-track-circle" cx="24" cy="24" r={radius} fill="none" strokeWidth="4" />
          <circle className="m3-progress-indicator-circle" cx="24" cy="24" r={radius} fill="none" strokeWidth="4" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`m3-progress-linear ${className}`}>
      <div className="m3-progress-track">
        <div className="m3-progress-indicator" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
