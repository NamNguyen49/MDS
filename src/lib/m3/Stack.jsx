import React from 'react';

const Stack = ({ 
  children, 
  direction = 'column', 
  spacing = 1, 
  align = 'stretch', 
  justify = 'start', 
  wrap = 'nowrap',
  className = '',
  style = {},
  ...props 
}) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: direction,
    gap: typeof spacing === 'number' ? `${spacing * 8}px` : spacing,
    alignItems: align === 'start' || align === 'end' ? `flex-${align}` : align,
    justifyContent: justify === 'start' || justify === 'end' ? `flex-${justify}` : justify,
    flexWrap: wrap,
    ...style
  };

  return (
    <div className={`m3-stack ${className}`} style={stackStyle} {...props}>
      {children}
    </div>
  );
};

export default Stack;
