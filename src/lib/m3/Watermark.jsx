import React, { useEffect, useRef, useState } from 'react';

const Watermark = ({ content = 'Watermark', font = {}, width = 120, height = 64, rotate = -22, zIndex = 9, opacity = 0.15, children, className = '', style, ...props }) => {
  const [base64Url, setBase64Url] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ratio = window.devicePixelRatio || 1;
    const canvasWidth = width * ratio;
    const canvasHeight = height * ratio;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(ratio, ratio);
      ctx.translate(width / 2, height / 2);
      ctx.rotate((rotate * Math.PI) / 180);
      
      const fontSize = font.fontSize || 16;
      const fontFamily = font.fontFamily || 'sans-serif';
      ctx.font = `${font.fontWeight || 'normal'} ${font.fontStyle || 'normal'} ${fontSize}px ${fontFamily}`;
      ctx.fillStyle = font.color || `rgba(0, 0, 0, ${opacity})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(content, 0, 0);

      setBase64Url(canvas.toDataURL());
    }
  }, [content, width, height, rotate, opacity, font]);

  return (
    <div ref={containerRef} className={`m3-watermark ${className}`} style={style} {...props}>
      {children}
      <div 
        className="m3-watermark-wrapper" 
        style={{ 
          zIndex, 
          backgroundImage: `url(${base64Url})`, 
          backgroundSize: `${width}px ${height}px` 
        }} 
      />
    </div>
  );
};

export default Watermark;
