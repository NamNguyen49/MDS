import React from 'react';

const SideSheet = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  actions,
  alignment = 'right' // right, left
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="m3-dialog-overlay" 
        onClick={onClose}
        style={{ zIndex: 1001 }}
      />
      <div className={`m3-side-sheet ${alignment} ${isOpen ? 'open' : ''}`}>
        <div className="m3-side-sheet-header">
          <IconButton icon="close" onClick={onClose} variant="text" />
          <h2 className="m3-title-large">{title}</h2>
        </div>
        <div className="m3-side-sheet-content">
          {children}
        </div>
        {actions && (
          <div className="m3-side-sheet-actions">
            {actions}
          </div>
        )}
      </div>
    </>
  );
};

export default SideSheet;
