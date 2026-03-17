import React, { useState } from 'react';

const Tooltip = ({ text, children, className = '' }) => {
  const [show, setShow] = useState(false);

  return (
    <div 
      className={`m3-tooltip-container ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="m3-tooltip">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
