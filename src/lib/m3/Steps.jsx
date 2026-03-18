import React from 'react';

const Steps = ({ children, current = 0, status = 'process', className = '', style, ...props }) => {
  const items = React.Children.toArray(children);

  return (
    <div className={`m3-steps ${className}`} style={style} {...props}>
      {items.map((item, index) => {
        let stepStatus = 'wait';
        if (index < current) stepStatus = 'finish';
        if (index === current) stepStatus = status;

        return React.cloneElement(item, {
          stepNumber: index + 1,
          status: stepStatus,
          isLast: index === items.length - 1,
        });
      })}
    </div>
  );
};

const Step = ({ title, description, icon, status, stepNumber, isLast, className = '', ...props }) => {
  return (
    <div className={`m3-steps-item m3-steps-item-${status} ${className}`} {...props}>
      <div className="m3-steps-item-container">
        <div className="m3-steps-item-icon">
          {icon ? icon : (status === 'finish' ? <span className="material-symbols-rounded" style={{fontSize: 20}}>check</span> : stepNumber)}
        </div>
        <div className="m3-steps-item-content">
          <div className="m3-steps-item-title">{title}</div>
          {description && <div className="m3-steps-item-description">{description}</div>}
        </div>
      </div>
    </div>
  );
};

Steps.Step = Step;

export default Steps;
