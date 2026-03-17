import React, { useState, useEffect } from 'react';

const Carousel = ({ images = [], autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, autoPlay, interval]);

  const goTo = (index) => setCurrentIndex(index);

  return (
    <div className="m3-carousel" style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      borderRadius: '24px',
      overflow: 'hidden',
      background: 'var(--md-sys-color-surface-container)'
    }}>
      {/* Slides */}
      <div style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: `translateX(-${currentIndex * 100}%)`
      }}>
        {images.map((img, i) => (
          <img 
            key={i} 
            src={img} 
            alt={`Slide ${i}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', flexShrink: 0 }} 
          />
        ))}
      </div>

      {/* Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px'
      }}>
        {images.map((_, i) => (
          <div 
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: currentIndex === i ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: currentIndex === i ? 'var(--md-sys-color-primary)' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '20px',
          background: 'rgba(0,0,0,0.3)',
          color: 'white',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <span className="material-symbols-rounded">chevron_left</span>
      </button>

      <button 
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '20px',
          background: 'rgba(0,0,0,0.3)',
          color: 'white',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <span className="material-symbols-rounded">chevron_right</span>
      </button>
    </div>
  );
};

export default Carousel;
