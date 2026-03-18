import React from 'react';

const Space = ({
  children,
  direction = 'horizontal', // 'horizontal' | 'vertical'
  size = 'small', // 'small' | 'middle' | 'large' | number
  wrap = false,
  className = '',
  style,
  align,
  ...props
}) => {
  const classNames = ['m3-space'];
  
  if (direction === 'vertical') classNames.push('m3-space-vertical');
  if (typeof size === 'string') classNames.push(`m3-space-gap-${size}`);
  if (wrap) classNames.push('m3-space-wrap');

  const customStyle = { ...style };
  if (typeof size === 'number') customStyle.gap = `${size}px`;
  if (align) customStyle.alignItems = align;

  return (
    <div className={`${classNames.join(' ')} ${className}`} style={customStyle} {...props}>
      {children}
    </div>
  );
};

export default Space;
