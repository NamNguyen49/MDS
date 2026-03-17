import React from 'react';

const Checkbox = ({ label, checked, onChange, disabled, className = '' }) => {
  return (
    <label className={`m3-checkbox-container ${className} ${disabled ? 'disabled' : ''}`}>
      <div className="m3-checkbox-wrapper">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          disabled={disabled} 
        />
        <div className={`m3-checkbox-box ${checked ? 'checked' : ''}`}>
          {checked && <span className="material-symbols-rounded">check</span>}
        </div>
        <span className="state-layer"></span>
      </div>
      {label && <span className="m3-checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
