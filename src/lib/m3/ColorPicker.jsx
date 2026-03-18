import React, { useState, useRef, useEffect } from 'react';

const ColorPicker = ({ value = '#1677ff', onChange, className = '', style, ...props }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(value);
  const containerRef = useRef(null);

  useEffect(() => {
    setColor(value);
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

  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (onChange) onChange(newColor);
  };

  return (
    <div ref={containerRef} className={`m3-dropdown ${open ? 'm3-dropdown-open' : ''} ${className}`} style={{ ...style, display: 'inline-block', position: 'relative' }} {...props}>
      <div className="m3-color-picker-trigger" onClick={() => setOpen(!open)}>
        <div className="m3-color-picker-color-block" style={{ backgroundColor: color }}></div>
      </div>
      <div className="m3-popover" style={{ display: open ? 'block' : 'none', top: '100%', left: 0, marginTop: 4, padding: 8 }}>
        <input 
          type="color" 
          value={color} 
          onChange={handleChange}
          style={{ width: 40, height: 40, cursor: 'pointer', border: 'none', padding: 0 }} 
        />
        <div style={{ marginTop: 8, fontSize: 12, textAlign: 'center' }}>
          {color.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
