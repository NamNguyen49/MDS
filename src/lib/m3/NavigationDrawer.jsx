import React from 'react';

const NavigationDrawer = ({ items, activeId, onChange, header, className = '' }) => {
  return (
    <aside className={`m3-navigation-drawer ${className}`}>
      {header && <div className="drawer-header">{header}</div>}
      
      <nav className="drawer-nav">
        {items.map((item, index) => {
          if (item.type === 'header') {
            return <div key={`header-${index}`} className="drawer-section-header">{item.label}</div>;
          }
          return (
            <button
              key={item.id}
              className={`drawer-item ${activeId === item.id ? 'active' : ''}`}
              onClick={() => onChange(item.id)}
            >
              <span className="state-layer"></span>
              <span className="material-symbols-rounded">{item.icon}</span>
              <span className="drawer-label">{item.label}</span>
              {item.badge && <span className="drawer-badge">{item.badge}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default NavigationDrawer;
