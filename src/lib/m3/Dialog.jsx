import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dialog = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  actions,
  className = '' 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`m3-dialog-overlay ${className}`} onClick={onClose}>
          <motion.div 
            className="m3-dialog-surface"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {title && <h2 className="m3-dialog-title">{title}</h2>}
            <div className="m3-dialog-content">
              {children}
            </div>
            {actions && (
              <div className="m3-dialog-actions">
                {actions}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
