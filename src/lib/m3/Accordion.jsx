import React, { useState } from 'react';
import clsx from 'clsx';

export const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className={clsx('m3-accordion-item', isOpen && 'open')}>
      <div className="m3-accordion-header" onClick={onClick}>
        <span className="m3-title-medium" style={{ fontWeight: 600 }}>{title}</span>
        <span className="material-symbols-rounded m3-accordion-icon">
          expand_more
        </span>
      </div>
      <div className="m3-accordion-content">
        {children}
      </div>
    </div>
  );
};

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="m3-accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
