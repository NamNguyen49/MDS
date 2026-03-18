import React, { useState, useRef, useEffect } from 'react';

const Popconfirm = ({
  title,
  onConfirm,
  onCancel,
  okText = 'OK',
  cancelText = 'Cancel',
  children,
  className = '',
  style,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

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

  const handleConfirm = () => {
    setOpen(false);
    if (onConfirm) onConfirm();
  };

  const handleCancel = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };

  return (
    <div ref={containerRef} className={`m3-dropdown ${open ? 'm3-dropdown-open' : ''} ${className}`} style={{ ...style, display: 'inline-block', position: 'relative' }} {...props}>
      <div onClick={() => setOpen(!open)} style={{ display: 'inline-block' }}>
        {children}
      </div>
      <div className="m3-popover" style={{ display: open ? 'block' : 'none', top: '100%', left: 0, marginTop: 4 }}>
        <div className="m3-popover-inner">
          <div className="m3-popconfirm-message">
            <span className="material-symbols-rounded m3-popconfirm-message-icon">error</span>
            <div className="m3-popconfirm-message-title">{title}</div>
          </div>
          <div className="m3-popconfirm-buttons">
            <button className="m3-popconfirm-cancel" onClick={handleCancel}>{cancelText}</button>
            <button className="m3-popconfirm-ok" onClick={handleConfirm}>{okText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popconfirm;
