import React from 'react';

const Statistic = ({ title, value, prefix, suffix, valueStyle, className = '', style, ...props }) => {
  return (
    <div className={`m3-statistic ${className}`} style={{ ...style, lineHeight: 1.5 }} {...props}>
      {title && <div className="m3-statistic-title" style={{ marginBottom: 4, color: 'var(--md-sys-color-on-surface-variant)', fontSize: 14 }}>{title}</div>}
      <div className="m3-statistic-content" style={{ display: 'flex', alignItems: 'baseline', color: 'var(--md-sys-color-on-surface)', fontSize: 24, ...valueStyle }}>
        {prefix && <span className="m3-statistic-content-prefix" style={{ marginRight: 4 }}>{prefix}</span>}
        <span className="m3-statistic-content-value">{value}</span>
        {suffix && <span className="m3-statistic-content-suffix" style={{ marginLeft: 4 }}>{suffix}</span>}
      </div>
    </div>
  );
};

export default Statistic;
