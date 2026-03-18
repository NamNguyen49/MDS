import React from 'react';

export const EmptyState = ({ 
  icon = 'database_off', 
  title = 'No Data Available', 
  description = 'There are no items to display here at the moment.',
  action 
}) => {
  return (
    <div className="m3-empty-state">
      <span className="material-symbols-rounded m3-empty-icon">{icon}</span>
      <h3 className="m3-headline-small" style={{ margin: 0, fontWeight: 700 }}>{title}</h3>
      <p className="m3-body-medium" style={{ opacity: 0.7, maxWidth: '300px' }}>{description}</p>
      {action && <div style={{ marginTop: '16px' }}>{action}</div>}
    </div>
  );
};

export default EmptyState;
