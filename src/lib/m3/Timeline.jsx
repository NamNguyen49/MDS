import React from "react";

const Timeline = ({ items, children, mode = "left", dashed = false, className = "", style, ...props }) => {
  const renderItems = () => {
    if (items && Array.isArray(items)) {
      return items.map((item, index) => (
        <Item key={index} dashed={dashed} mode={mode} {...item} />
      ));
    }
    return React.Children.map(children, (child) =>
      React.isValidElement(child) ? React.cloneElement(child, { dashed, mode }) : child
    );
  };

  return (
    <ul className={`m3-timeline m3-timeline-${mode} ${dashed ? "m3-timeline-dashed" : ""} ${className}`} style={style} {...props}>
      {renderItems()}
    </ul>
  );
};

const Item = ({ children, label, color, icon, dot, dashed, mode, className = "", style, ...props }) => {
  const headStyle = color && !dot && !icon ? { borderColor: color, color } : {};
  
  return (
    <li className={`m3-timeline-item ${className}`} style={style} {...props}>
      <div className={`m3-timeline-item-tail ${dashed ? "dashed" : ""}`}></div>
      <div className="m3-timeline-item-head-wrapper">
        {dot ? (
          <div className="m3-timeline-item-head-custom">{dot}</div>
        ) : icon ? (
          <div className="m3-timeline-item-head-icon" style={{ color: color || "var(--md-sys-color-primary)" }}>
            <span className="material-symbols-rounded">{icon}</span>
          </div>
        ) : (
          <div className="m3-timeline-item-head" style={headStyle}></div>
        )}
      </div>
      {label && <div className="m3-timeline-item-label">{label}</div>}
      <div className="m3-timeline-item-content">{children}</div>
    </li>
  );
};

Timeline.Item = Item;

export default Timeline;
