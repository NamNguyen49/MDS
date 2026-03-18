import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ overlay, children, trigger = ['hover'], className = '', style, ...props }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (trigger.includes('click') && open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, trigger]);

  const handleMouseEnter = () => {
    if (trigger.includes('hover')) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (trigger.includes('hover')) setOpen(false);
  };

  const handleClick = (e) => {
    if (trigger.includes('click')) {
      e.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`m3-dropdown ${open ? 'm3-dropdown-open' : ''} ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="m3-dropdown-trigger" onClick={handleClick}>
        {children}
      </div>
      <div className={`m3-dropdown-menu`}>
        {React.cloneElement(overlay, { 
          onClick: () => {
             if(overlay.props.onClick) overlay.props.onClick();
             setOpen(false);
          }
        })}
      </div>
    </div>
  );
};

export default Dropdown;
