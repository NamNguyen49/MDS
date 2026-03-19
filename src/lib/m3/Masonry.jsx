import React from 'react';
import clsx from 'clsx';

/**
 * Masonry layout component for Pinterest-like interfaces.
 * Uses CSS column properties for optimal performance.
 */
const Masonry = ({ 
  children, 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 }, 
  gap = 16,
  className = '',
  style = {},
  ...props 
}) => {
  // We use a CSS-trick with column-count
  // For responsiveness, we can generate a small style block or use inline styles with window width listener
  // But for now, we'll provide a stable column count that can be overridden.
  
  const containerStyle = {
    columnCount: typeof cols === 'number' ? cols : 3, // Default to 3, but typically overridden by props
    columnGap: `${gap}px`,
    width: '100%',
    ...style
  };

  const itemStyle = {
    breakInside: 'avoid',
    marginBottom: `${gap}px`,
    display: 'inline-block',
    width: '100%',
  };

  return (
    <div className={clsx('m3-masonry', className)} style={containerStyle} {...props}>
      {React.Children.map(children, (child) => (
        <div className="m3-masonry-item" style={itemStyle}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
