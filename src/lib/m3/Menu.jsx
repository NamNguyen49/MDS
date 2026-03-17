import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = ({ trigger, items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`m3-menu-container ${className}`} ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={() => setIsOpen(!isOpen)} className="m3-menu-trigger">
        {trigger}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="m3-menu"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <div className="menu-items">
              {items.map((item, index) => (
                <button 
                  key={index} 
                  className="menu-item"
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    setIsOpen(false);
                  }}
                >
                  <span className="state-layer"></span>
                  {item.leadingIcon && <span className="material-symbols-rounded leading">{item.leadingIcon}</span>}
                  <span className="menu-label">{item.label}</span>
                  {item.trailingText && <span className="trailing-text">{item.trailingText}</span>}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
