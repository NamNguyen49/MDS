import React from 'react';

const NavigationBar = ({ items, activeId, onChange, className = '' }) => {
  return (
    <div className={`m3-navigation-bar ${className}`}>
      {items.map(item => (
        <button 
          key={item.id} 
          className={`m3-navigation-item ${activeId === item.id ? 'active' : ''}`}
          onClick={() => onChange(item.id)}
        >
          <span className="state-layer"></span>
          <div className="icon-container">
            <span className="material-symbols-rounded">{item.icon}</span>
            {item.badge && <span className="m3-badge m3-badge-small"></span>}
          </div>
          <span className="label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
