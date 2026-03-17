import React from 'react';

const NavigationRail = ({ items, activeId, onChange, fab, className = '' }) => {
  return (
    <nav className={`m3-navigation-rail ${className}`}>
      {fab && <div className="rail-fab-container">{fab}</div>}
      
      <div className="rail-items">
        {items.map((item) => (
          <button
            key={item.id}
            className={`rail-item ${activeId === item.id ? 'active' : ''}`}
            onClick={() => onChange(item.id)}
          >
            <div className="rail-icon-container">
              <span className="state-layer"></span>
              <span className="material-symbols-rounded">{item.icon}</span>
              {item.badge && <span className="rail-badge">{item.badge}</span>}
            </div>
            <span className="rail-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationRail;
