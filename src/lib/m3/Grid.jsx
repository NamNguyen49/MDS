import React from 'react';

export const Row = ({ children, gutter = 0, align, justify, wrap, className = '', style, ...props }) => {
  const g = Array.isArray(gutter) ? gutter : [gutter, 0];
  const customStyle = {
    ...style,
    marginLeft: g[0] ? -g[0] / 2 : undefined,
    marginRight: g[0] ? -g[0] / 2 : undefined,
    rowGap: g[1] ? `${g[1]}px` : undefined,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap === false ? 'nowrap' : 'wrap',
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { gutter: g });
    }
    return child;
  });

  return (
    <div className={`m3-row ${className}`} style={customStyle} {...props}>
      {childrenWithProps}
    </div>
  );
};

export const Col = ({ children, span, offset, flex, gutter, className = '', style, ...props }) => {
  let customStyle = { ...style };
  
  if (gutter && gutter[0]) {
    customStyle.paddingLeft = gutter[0] / 2;
    customStyle.paddingRight = gutter[0] / 2;
  }

  if (span !== undefined) {
    customStyle.flex = `0 0 ${(span / 24) * 100}%`;
    customStyle.maxWidth = `${(span / 24) * 100}%`;
  }
  
  if (offset !== undefined) {
    customStyle.marginLeft = `${(offset / 24) * 100}%`;
  }
  
  if (flex !== undefined) {
    customStyle.flex = flex;
  }

  return (
    <div className={`m3-col ${className}`} style={customStyle} {...props}>
      {children}
    </div>
  );
};

export default { Row, Col };
