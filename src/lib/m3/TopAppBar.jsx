import React from 'react';

const TopAppBar = ({ title, leadingIcon, trailingIcons, variant = 'center', className = '' }) => {
  return (
    <header className={`m3-top-app-bar m3-top-app-bar-${variant} ${className}`}>
      <div className="top-app-bar-container">
        {leadingIcon && (
          <button className="m3-icon-btn">
            <span className="material-symbols-rounded">{leadingIcon}</span>
          </button>
        )}
        
        <div className="top-app-bar-title">
          {title}
        </div>

        <div className="top-app-bar-trailing">
          {trailingIcons && trailingIcons.map((item, index) => (
            <button 
              key={index} 
              className="m3-icon-btn" 
              onClick={item.onClick || null}
            >
              <span className="material-symbols-rounded">{item.icon || item}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
