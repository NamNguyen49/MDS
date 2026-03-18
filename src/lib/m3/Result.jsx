import React from 'react';

const icons = {
  success: 'check_circle',
  error: 'cancel',
  info: 'info',
  warning: 'warning',
};

const Result = ({ title, subTitle, status = 'info', icon, extra, className = '', style, ...props }) => {
  return (
    <div className={`m3-result m3-result-${status} ${className}`} style={style} {...props}>
      <div className="m3-result-icon">
        {icon || <span className="material-symbols-rounded">{icons[status] || 'info'}</span>}
      </div>
      {title && <h2 className="m3-result-title">{title}</h2>}
      {subTitle && <div className="m3-result-subtitle">{subTitle}</div>}
      {extra && <div className="m3-result-extra">{extra}</div>}
    </div>
  );
};

export default Result;
