import React from 'react';

const Tabs = ({ 
  tabs, 
  activeTab, 
  onChange, 
  className = '' 
}) => {
  return (
    <div className={`m3-tabs ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`m3-tab-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          <span className="state-layer"></span>
          {tab.icon && <span className="material-symbols-rounded">{tab.icon}</span>}
          <span className="tab-label">{tab.label}</span>
          {activeTab === tab.id && <div className="active-indicator"></div>}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
