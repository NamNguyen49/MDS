import React from 'react';
import clsx from 'clsx';

export const Avatar = ({ src, alt, children, size = 40, className, style }) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
    minWidth: `${size}px`,
    fontSize: `${size / 2}px`,
    ...style
  };

  return (
    <div className={clsx('m3-avatar', className)} style={styles}>
      {src ? (
        <img src={src} alt={alt || 'Avatar'} draggable={false} />
      ) : (
        children || <span className="material-symbols-rounded">person</span>
      )}
    </div>
  );
};

export default Avatar;
