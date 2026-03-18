import React, { useState, useRef, useEffect } from 'react';
import Calendar from './Calendar'; // assume Calendar is at same level

const DatePicker = ({ value, onChange, placeholder = 'Select date', className = '', style, ...props }) => {
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleDateSelect = (date) => {
    setCurrentValue(date);
    setOpen(false);
    if (onChange) onChange(date);
  };

  const displayValue = currentValue ? new Date(currentValue).toLocaleDateString() : '';

  return (
    <div ref={containerRef} className={`m3-datepicker ${className}`} style={{ ...style }} {...props}>
      <div className="m3-datepicker-input" onClick={() => setOpen(!open)}>
        <input 
          type="text" 
          readOnly 
          placeholder={placeholder} 
          value={displayValue}
        />
        <span className="material-symbols-rounded m3-datepicker-icon">calendar_month</span>
      </div>
      {open && (
        <div className="m3-datepicker-dropdown">
          <Calendar value={currentValue} onChange={handleDateSelect} style={{ border: 'none', boxShadow: 'none' }} />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
