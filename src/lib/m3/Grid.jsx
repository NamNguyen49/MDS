import React from 'react';

/**
 * Grid component inspired by MUI.
 * Supports a 12-column system with container and item props.
 */
const Grid = ({ 
  children, 
  container = false, 
  item = false, 
  xs, sm, md, lg, xl, 
  spacing = 2, 
  columns = 12,
  alignItems = 'stretch',
  justifyContent = 'start',
  direction = 'row',
  className = '',
  style = {},
  ...props 
}) => {
  const gutter = typeof spacing === 'number' ? `${spacing * 8}px` : spacing;
  
  const getColWidth = (val) => {
    if (val === true) return 'auto';
    if (!val) return null;
    return `${(val / columns) * 100}%`;
  };

  const gridStyle = {
    boxSizing: 'border-box',
    display: container ? 'flex' : 'block',
    flexWrap: container ? 'wrap' : undefined,
    flexDirection: container ? direction : undefined,
    width: container ? `calc(100% + ${gutter})` : undefined,
    margin: container ? `calc(-${gutter} / 2)` : undefined,
    padding: item ? `calc(${gutter} / 2)` : undefined,
    alignItems: container ? (alignItems === 'start' || alignItems === 'end' ? `flex-${alignItems}` : alignItems) : undefined,
    justifyContent: container ? (justifyContent === 'start' || justifyContent === 'end' ? `flex-${justifyContent}` : justifyContent) : undefined,
    flexBasis: item ? getColWidth(xs) || 'auto' : undefined,
    flexGrow: item ? (xs ? 0 : 1) : undefined,
    flexShrink: item ? 0 : undefined,
    maxWidth: item ? getColWidth(xs) || '100%' : undefined,
    ...style
  };

  return (
    <div 
      className={`m3-grid ${container ? 'm3-grid-container' : 'm3-grid-item'} ${className}`} 
      style={gridStyle} 
      {...props}
    >
      {children}
    </div>
  );
};

// Backwards compatibility for Row/Col if needed
Grid.Row = (props) => <Grid container {...props} />;
Grid.Col = (props) => <Grid item {...props} />;

export const Row = Grid.Row;
export const Col = Grid.Col;

export default Grid;
