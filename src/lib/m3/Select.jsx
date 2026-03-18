import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

export const Select = ({ options = [], value, onChange, label, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={clsx('m3-select-container', isOpen && 'open')} ref={containerRef}>
      {label && <label className="m3-label-large" style={{ opacity: 0.7, paddingLeft: '4px' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <div 
          className="m3-select-trigger" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={clsx('m3-body-large', !selectedOption && 'placeholder')}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="material-symbols-rounded" style={{ transition: '0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
            expand_more
          </span>
        </div>
        <div className="m3-select-menu">
          {options.length > 0 ? options.map((option) => (
            <div
              key={option.value}
              className={clsx('m3-select-option', value === option.value && 'selected')}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          )) : (
            <div className="m3-select-option" style={{ opacity: 0.5, cursor: 'default' }}>No options</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Select;
