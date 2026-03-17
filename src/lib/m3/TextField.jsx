import React, { useState } from 'react';

const TextField = ({ 
  label, 
  error, 
  helperText, 
  icon, 
  className = '',
  onFocus,
  onBlur,
  onChange,
  value: controlledValue,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState('');
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const hasValue = value && value.length > 0;

  return (
    <div className={`m3-tf-container ${className}`}>
      <div className={`m3-tf-field ${isFocused ? 'focused' : ''} ${hasValue ? 'has-value' : ''} ${error ? 'error' : ''}`}>
        {icon && <span className="material-symbols-rounded" style={{color: 'var(--md-sys-color-on-surface-variant)'}}>{icon}</span>}
        <div className="m3-tf-input-container">
          <input
            className="m3-tf-input"
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            onChange={(e) => {
              setInternalValue(e.target.value);
              onChange?.(e);
            }}
            value={value}
            {...props}
          />
          <label className="m3-tf-label">{label}</label>
        </div>
      </div>
      {helperText && (
        <span className={`m3-tf-helper ${error ? 'error' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextField;
