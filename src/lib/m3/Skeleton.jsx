import React from 'react';
import clsx from 'clsx';

export const Skeleton = ({ variant = 'text', width, height, style, className }) => {
  const styles = {
    width,
    height,
    ...style
  };

  return (
    <div 
      className={clsx('m3-skeleton', `m3-skeleton-${variant}`, className)} 
      style={styles} 
    />
  );
};

export default Skeleton;
