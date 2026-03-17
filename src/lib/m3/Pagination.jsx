import React from 'react';

const Pagination = ({ totalPages = 5, currentPage = 1, onPageChange }) => {
  const items = [];
  
  // Previous button
  items.push(
    <div 
      key="prev" 
      className={`m3-pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
      onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
    >
      <span className="material-symbols-rounded">chevron_left</span>
    </div>
  );

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <div 
        key={i} 
        className={`m3-pagination-item ${currentPage === i ? 'active' : ''}`}
        onClick={() => onPageChange?.(i)}
      >
        {i}
      </div>
    );
  }

  // Next button
  items.push(
    <div 
      key="next" 
      className={`m3-pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
      onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
    >
      <span className="material-symbols-rounded">chevron_right</span>
    </div>
  );

  return (
    <div className="m3-pagination">
      {items}
    </div>
  );
};

export default Pagination;
