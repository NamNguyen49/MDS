import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

const COMMON_ICONS = [
  'home', 'search', 'settings', 'favorite', 'share', 'delete', 'edit', 'add', 
  'person', 'mail', 'notifications', 'calendar_today', 'info', 'check_circle', 
  'warning', 'error', 'close', 'arrow_back', 'menu', 'more_vert', 'more_horiz',
  'star', 'thumb_up', 'thumb_down', 'visibility', 'visibility_off', 'lock',
  'shopping_cart', 'attach_file', 'cloud_upload', 'download', 'language'
];

export const IconPicker = ({ value, onChange, label, placeholder = 'Select an icon' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

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
      <div 
        className="m3-select-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ height: 'auto', minHeight: '56px', padding: '12px 16px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {value ? (
            <>
              <span className="material-symbols-rounded" style={{ color: 'var(--md-sys-color-primary)' }}>{value}</span>
              <span className="m3-body-large">{value}</span>
            </>
          ) : (
            <span className="m3-body-large placeholder">{placeholder}</span>
          )}
        </div>
        <span className="material-symbols-rounded">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      <div className="m3-select-menu" style={{ padding: '8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', maxHeight: '200px', overflowY: 'auto' }}>
          {COMMON_ICONS.map((icon) => (
            <div
              key={icon}
              className={clsx('m3-icon-picker-item', value === icon && 'selected')}
              onClick={() => {
                onChange(icon);
                setIsOpen(false);
              }}
              title={icon}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '24px' }}>{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
