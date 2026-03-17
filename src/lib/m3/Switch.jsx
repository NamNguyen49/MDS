import React from 'react';

const Switch = ({ checked, onChange, disabled, className = '' }) => {
  return (
    <label className={`m3-switch ${className} ${disabled ? 'disabled' : ''}`}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        disabled={disabled} 
      />
      <div className="m3-switch-track">
        <div className="m3-switch-thumb">
          {checked && <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>check</span>}
        </div>
      </div>
    </label>
  );
};

export default Switch;
