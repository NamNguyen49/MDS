import React, { useState, useEffect } from 'react';

const InputNumber = ({ value, defaultValue, min, max, step = 1, onChange, className = '', style, ...props }) => {
  const [currentValue, setCurrentValue] = useState(value !== undefined ? value : (defaultValue || 0));

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const updateValue = (newVal) => {
    let finalVal = Number(newVal);
    if (isNaN(finalVal)) return;

    if (min !== undefined && finalVal < min) finalVal = min;
    if (max !== undefined && finalVal > max) finalVal = max;

    if (value === undefined) setCurrentValue(finalVal);
    if (onChange && finalVal !== currentValue) onChange(finalVal);
  };

  const handleUp = () => updateValue(currentValue + step);
  const handleDown = () => updateValue(currentValue - step);

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleBlur = (e) => {
    updateValue(e.target.value);
  };

  return (
    <div className={`m3-input-number ${className}`} style={style} {...props}>
      <div className="m3-input-number-input-wrap">
        <input 
          autoComplete="off" 
          role="spinbutton" 
          step={step} 
          min={min} 
          max={max} 
          className="m3-input-number-input" 
          value={currentValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="m3-input-number-handler-wrap">
        <span className="m3-input-number-handler m3-input-number-handler-up" onClick={handleUp}>
          <span className="material-symbols-rounded">keyboard_arrow_up</span>
        </span>
        <span className="m3-input-number-handler m3-input-number-handler-down" onClick={handleDown}>
          <span className="material-symbols-rounded">keyboard_arrow_down</span>
        </span>
      </div>
    </div>
  );
};

export default InputNumber;
