import React from 'react';
import IconButton from './IconButton';

/**
 * Material 3 Top App Bar
 * Fixed version: Does NOT wrap React elements in buttons to avoid nested button errors.
 */
const TopAppBar = ({ title, leadingIcon, onLeadingClick, trailingIcons, variant = 'center', className = '' }) => {
  return (
    <header className={`m3-top-app-bar m3-top-app-bar-${variant} ${className}`}>
      <div className="top-app-bar-container">
        {leadingIcon && (
          <IconButton icon={leadingIcon} onClick={onLeadingClick} />
        )}
        
        <div className="top-app-bar-title">
          {title}
        </div>

        <div className="top-app-bar-trailing">
          {trailingIcons && trailingIcons.map((item, index) => {
            // If the item is already a React element (like <Menu />), 
            // render it directly to avoid nested button errors.
            if (React.isValidElement(item)) {
              return <React.Fragment key={index}>{item}</React.Fragment>;
            }
            
            // If it's a config object or string, use IconButton.
            return (
              <IconButton
                key={index}
                icon={item.icon || item}
                onClick={item.onClick}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
