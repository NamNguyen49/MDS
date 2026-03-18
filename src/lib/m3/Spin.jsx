import React from 'react';

const Spin = ({ spinning = true, size = 'default', children, className = '', style, ...props }) => {
  const spinElement = (
    <div className={`m3-spin ${spinning ? 'm3-spin-spinning' : ''} ${className}`} style={style} {...props}>
      <span className="m3-spin-dot">
        <i className="m3-spin-dot-item"></i>
        <i className="m3-spin-dot-item"></i>
        <i className="m3-spin-dot-item"></i>
        <i className="m3-spin-dot-item"></i>
      </span>
    </div>
  );

  if (children) {
    return (
      <div className={`m3-spin-nested-loading ${spinning ? 'm3-spin-blur' : ''}`}>
        {spinning && <div>{spinElement}</div>}
        <div className="m3-spin-container">{children}</div>
      </div>
    );
  }

  return spinning ? spinElement : null;
};

export default Spin;
