import React from 'react';

const List = ({ children, className = '' }) => {
  return (
    <div className={`m3-list ${className}`}>
      {children}
    </div>
  );
};

const ListItem = ({ 
  headline, 
  supportingText, 
  leadingIcon, 
  trailingIcon, 
  onClick,
  className = '' 
}) => {
  return (
    <div 
      className={`m3-list-item ${onClick ? 'clickable' : ''} ${className}`}
      onClick={onClick}
    >
      <span className="state-layer"></span>
      {leadingIcon && (
        <span className="material-symbols-rounded leading-icon">
          {leadingIcon}
        </span>
      )}
      <div className="list-item-content">
        <span className="headline">{headline}</span>
        {supportingText && <span className="supporting-text">{supportingText}</span>}
      </div>
      {trailingIcon && (
        <span className="material-symbols-rounded trailing-icon">
          {trailingIcon}
        </span>
      )}
    </div>
  );
};

export { List, ListItem };
