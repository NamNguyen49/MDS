import React from 'react';

const Flex = ({
  children,
  vertical = false,
  wrap = false,
  justify = 'normal',
  align = 'normal',
  gap = 0,
  className = '',
  style,
  ...props
}) => {
  const customStyle = {
    ...style,
    gap: gap !== 0 ? gap : undefined,
    justifyContent: justify !== 'normal' ? justify : undefined,
    alignItems: align !== 'normal' ? align : undefined,
  };

  const classNames = ['m3-flex'];
  if (vertical) classNames.push('m3-flex-vertical');
  if (wrap) classNames.push('m3-flex-wrap');

  return (
    <div className={`${classNames.join(' ')} ${className}`} style={customStyle} {...props}>
      {children}
    </div>
  );
};

export default Flex;
