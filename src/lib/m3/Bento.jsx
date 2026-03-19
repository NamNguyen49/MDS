import React from 'react';
import clsx from 'clsx';

/**
 * BentoGrid provides a container for Bento-style layouts.
 * It uses CSS Grid to allow complex spanning.
 */
export const BentoGrid = ({ 
  children, 
  className = '', 
  columns = 4, 
  rows = 'auto', 
  gap = 16,
  style = {},
  ...props 
}) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridAutoRows: rows,
    gap: `${gap}px`,
    width: '100%',
    ...style
  };

  return (
    <div className={clsx('m3-bento-grid', className)} style={gridStyle} {...props}>
      {children}
    </div>
  );
};

/**
 * BentoCard handles individual items in the BentoGrid.
 */
export const BentoCard = ({ 
  children, 
  className = '', 
  colSpan = 1, 
  rowSpan = 1,
  style = {},
  ...props 
}) => {
  const cardStyle = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    display: 'flex',
    flexDirection: 'column',
    ...style
  };

  return (
    <div className={clsx('m3-bento-card', className)} style={cardStyle} {...props}>
      {children}
    </div>
  );
};

export default { Grid: BentoGrid, Card: BentoCard };
