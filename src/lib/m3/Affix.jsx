import React, { useEffect, useState, useRef } from 'react';

const Affix = ({ offsetTop, offsetBottom, target = () => window, children, className = '', style, ...props }) => {
  const [fixed, setFixed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const targetNode = target();
      if (!targetNode) return;

      const rect = containerRef.current.getBoundingClientRect();
      const targetTop = targetNode === window ? 0 : targetNode.getBoundingClientRect().top;
      const targetBottom = targetNode === window ? window.innerHeight : targetNode.getBoundingClientRect().bottom;

      if (offsetTop !== undefined) {
        if (rect.top - targetTop <= offsetTop) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      } else if (offsetBottom !== undefined) {
        if (targetBottom - rect.bottom <= offsetBottom) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      }
    };

    const targetNode = target();
    if (targetNode) {
      targetNode.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      handleScroll();
    }

    return () => {
      if (targetNode) {
        targetNode.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleScroll);
    };
  }, [offsetTop, offsetBottom, target]);

  const fixedStyle = fixed
    ? {
        position: 'fixed',
        top: offsetTop !== undefined ? offsetTop : undefined,
        bottom: offsetBottom !== undefined ? offsetBottom : undefined,
        zIndex: 1000,
        ...style,
      }
    : { ...style };

  return (
    <div className={`m3-affix-wrapper ${className}`} {...props}>
      <div ref={containerRef} style={fixedStyle}>
        {children}
      </div>
    </div>
  );
};

export default Affix;
