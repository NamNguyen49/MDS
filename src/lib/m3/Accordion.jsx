import React, { useState, useId } from 'react';
import clsx from 'clsx';

export const AccordionItem = ({ title, children, isOpen, onClick }) => {
  const id = useId();
  const headerId = `accordion-header-${id}`;
  const contentId = `accordion-content-${id}`;

  return (
    <div className={clsx('m3-accordion-item', isOpen && 'open')}>
      <div 
        className="m3-accordion-header" 
        onClick={onClick}
        role="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <span className="m3-title-medium" style={{ fontWeight: 600 }}>{title}</span>
        <span className="material-symbols-rounded m3-accordion-icon" aria-hidden="true">
          expand_more
        </span>
      </div>
      <div 
        className="m3-accordion-content"
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        hidden={!isOpen}
      >
        <div style={{ padding: '16px 0' }}>
          {children}
        </div>
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
    <div className="m3-accordion" role="presentation">
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
