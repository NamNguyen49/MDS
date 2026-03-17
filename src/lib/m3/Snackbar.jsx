import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Snackbar = ({ 
  message, 
  actionLabel, 
  onAction, 
  isOpen, 
  onClose,
  className = '' 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={`m3-snackbar ${className}`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <span className="snackbar-message">{message}</span>
          {actionLabel && (
            <button className="snackbar-action" onClick={onAction}>
              {actionLabel}
            </button>
          )}
          <button className="snackbar-close" onClick={onClose}>
            <span className="material-symbols-rounded">close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Snackbar;
