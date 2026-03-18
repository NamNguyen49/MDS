import React, { useState } from 'react';

const Rate = ({ value = 0, count = 5, onChange, allowHalf = false, className = '', style, ...props }) => {
  const [hoverValue, setHoverValue] = useState(null);

  const handleMouseMove = (index, event) => {
    if (!allowHalf) {
      setHoverValue(index + 1);
      return;
    }
    const { left, width } = event.target.getBoundingClientRect();
    const isHalf = event.clientX - left < width / 2;
    setHoverValue(isHalf ? index + 0.5 : index + 1);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleClick = (index, event) => {
    let newValue = index + 1;
    if (allowHalf) {
      const { left, width } = event.target.getBoundingClientRect();
      const isHalf = event.clientX - left < width / 2;
      newValue = isHalf ? index + 0.5 : index + 1;
    }
    if (onChange) onChange(newValue);
  };

  const stars = [];
  const displayValue = hoverValue !== null ? hoverValue : value;

  for (let i = 0; i < count; i++) {
    let starClass = 'm3-rate-star-zero';
    if (displayValue >= i + 1) {
      starClass = 'm3-rate-star-full';
    } else if (allowHalf && displayValue >= i + 0.5) {
      starClass = 'm3-rate-star-half';
    }

    stars.push(
      <li 
        key={i} 
        className={`m3-rate-star ${starClass}`}
        onMouseMove={(e) => handleMouseMove(i, e)}
        onClick={(e) => handleClick(i, e)}
      >
        <span className="material-symbols-rounded">star</span>
      </li>
    );
  }

  return (
    <ul 
      className={`m3-rate ${className}`} 
      onMouseLeave={handleMouseLeave}
      style={style} 
      {...props}
    >
      {stars}
    </ul>
  );
};

export default Rate;
