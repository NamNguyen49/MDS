import React from 'react';

const Divider = ({ className = '', vertical = false }) => {
  return (
    <div className={`m3-divider ${vertical ? 'vertical' : ''} ${className}`}></div>
  );
};

export default Divider;
