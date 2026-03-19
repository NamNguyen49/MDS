import React, { useId } from 'react';

const Tabs = ({ 
  tabs, 
  activeTab, 
  onChange, 
  className = '' 
}) => {
  const baseId = useId();
  
  return (
    <div className={`m3-tabs ${className}`} role="tablist">
      {tabs.map((tab) => {
        const tabId = `m3-tab-${baseId}-${tab.id}`;
        const panelId = `m3-panel-${baseId}-${tab.id}`;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            id={tabId}
            role="tab"
            aria-selected={isActive}
            aria-controls={panelId}
            className={`m3-tab-item ${isActive ? 'active' : ''}`}
            onClick={() => onChange(tab.id)}
            tabIndex={isActive ? 0 : -1}
          >
            <span className="state-layer"></span>
            {tab.icon && (
              <span className="material-symbols-rounded" aria-hidden="true">
                {tab.icon}
              </span>
            )}
            <span className="tab-label">{tab.label}</span>
            {isActive && <div className="active-indicator"></div>}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
