import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BottomSheet = ({ isOpen, onClose, title, children, className = '' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="m3-bottom-sheet-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className={`m3-bottom-sheet ${className}`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="bottom-sheet-handle-container">
              <div className="bottom-sheet-handle"></div>
            </div>
            
            {title && <div className="bottom-sheet-header">{title}</div>}
            
            <div className="bottom-sheet-content">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
