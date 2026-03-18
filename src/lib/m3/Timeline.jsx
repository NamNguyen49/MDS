import React from 'react';

const Timeline = ({ children, className = '', style, ...props }) => {
  return (
    <ul className={`m3-timeline ${className}`} style={style} {...props}>
      {children}
    </ul>
  );
};

const Item = ({ children, color, className = '', style, ...props }) => {
  const headStyle = color ? { borderColor: color, color } : {};
  return (
    <li className={`m3-timeline-item ${className}`} style={style} {...props}>
      <div className="m3-timeline-item-tail"></div>
      <div className="m3-timeline-item-head" style={headStyle}></div>
      <div className="m3-timeline-item-content">{children}</div>
    </li>
  );
};

Timeline.Item = Item;

export default Timeline;
