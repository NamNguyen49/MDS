import React from 'react';

const Descriptions = ({ title, column = 3, children, className = '', style, ...props }) => {
  const items = React.Children.toArray(children);

  return (
    <div className={`m3-descriptions ${className}`} style={style} {...props}>
      {title && <div className="m3-descriptions-title">{title}</div>}
      <div 
        className="m3-descriptions-view"
        style={{ '--m3-descriptions-column': column }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="m3-descriptions-item" style={{ gridColumn: `span ${item.props.span || 1}` }}>
            <div className="m3-descriptions-item-label">{item.props.label}</div>
            <div className="m3-descriptions-item-content">{item.props.children}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Item = ({ label, span = 1, children }) => {
  return null; // The rendering is handled by the parent
};

Descriptions.Item = Item;

export default Descriptions;
