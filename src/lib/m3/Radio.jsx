import React from 'react';
import clsx from 'clsx';

export const Radio = ({ label, selected, onClick, disabled }) => {
  return (
    <div 
      className={clsx('m3-radio-container', selected && 'selected', disabled && 'disabled')} 
      onClick={!disabled ? onClick : undefined}
    >
      <div className="m3-radio-outer">
        <div className="m3-radio-inner" />
      </div>
      {label && <span className="m3-label-large">{label}</span>}
    </div>
  );
};

export const RadioGroup = ({ options, value, onChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {options.map((opt) => (
        <Radio
          key={opt.value}
          label={opt.label}
          selected={value === opt.value}
          onClick={() => onChange(opt.value)}
        />
      ))}
    </div>
  );
};

export default Radio;
