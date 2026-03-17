import React from 'react';

const Slider = ({ 
  value, 
  min = 0, 
  max = 100, 
  onChange, 
  className = '',
  ...props 
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`m3-slider ${className}`}>
      <div className="m3-slider-track">
        <div 
          className="m3-slider-active-track" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={onChange}
        className="m3-slider-input"
        {...props}
      />
      <div 
        className="m3-slider-thumb"
        style={{ left: `${percentage}%` }}
      >
        <span className="state-layer"></span>
      </div>
    </div>
  );
};

export default Slider;
