import React, { useState } from 'react';

const Calendar = ({ value, onChange, className = '', style, ...props }) => {
  const [currentDate, setCurrentDate] = useState(value ? new Date(value) : new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (y, m) => new Date(y, m, 1).getDay();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDateClick = (day) => {
    const selected = new Date(year, month, day);
    setCurrentDate(selected);
    if (onChange) onChange(selected);
  };

  const renderCells = () => {
    const cells = [];
    const today = new Date();
    
    // Empty cells for previous month
    for (let i = 0; i < firstDay; i++) {
      cells.push(<td key={`empty-${i}`}></td>);
    }
    
    // Days in current month
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
      const isSelected = value && new Date(value).getDate() === d && new Date(value).getMonth() === month && new Date(value).getFullYear() === year;
      
      cells.push(
        <td key={`day-${d}`}>
          <div 
            className={`m3-calendar-date ${isToday ? 'm3-calendar-date-today' : ''} ${isSelected ? 'm3-calendar-date-selected' : ''}`}
            onClick={() => handleDateClick(d)}
          >
            {d}
          </div>
        </td>
      );
    }
    
    // Group into rows
    const rows = [];
    let currentRow = [];
    cells.forEach((cell, i) => {
      currentRow.push(cell);
      if ((i + 1) % 7 === 0 || i === cells.length - 1) {
        if (currentRow.length < 7 && i === cells.length - 1) {
          while (currentRow.length < 7) currentRow.push(<td key={`empty-end-${currentRow.length}`}></td>);
        }
        rows.push(<tr key={`row-${i}`}>{currentRow}</tr>);
        currentRow = [];
      }
    });

    return rows;
  };

  const [view, setView] = useState('days'); // 'days', 'months', 'years'
  const [yearPage, setYearPage] = useState(year);

  const fullMonthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
  const shortMonthNames = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
  
  // Create 12 years for the current page
  const startYear = Math.floor(yearPage / 12) * 12;
  const yearsList = Array.from({ length: 12 }, (_, i) => startYear + i);

  const handleYearChange = (y) => {
    setCurrentDate(new Date(y, month, 1));
    setView('days');
    setYearPage(y);
  };

  const handleMonthChange = (m) => {
    setCurrentDate(new Date(year, m, 1));
    setView('days');
  };

  const handleHeaderPrev = () => {
    if (view === 'days') prevMonth();
    else if (view === 'years') setYearPage(yearPage - 12);
  };

  const handleHeaderNext = () => {
    if (view === 'days') nextMonth();
    else if (view === 'years') setYearPage(yearPage + 12);
  };

  return (
    <div className={`m3-calendar ${className}`} style={style} {...props}>
      <div className="m3-calendar-header">
        <div className="m3-calendar-title-area">
          <div 
            className={`m3-calendar-chip ${view === 'months' ? 'active' : ''}`}
            onClick={() => setView(view === 'months' ? 'days' : 'months')}
          >
            {fullMonthNames[month]}
          </div>
          <div 
            className={`m3-calendar-chip ${view === 'years' ? 'active' : ''}`}
            onClick={() => {
              setView(view === 'years' ? 'days' : 'years');
              setYearPage(year);
            }}
          >
            {year}
          </div>
        </div>
        <div className="m3-calendar-controls">
          <button className="m3-btn-icon-small" onClick={handleHeaderPrev} title="Previous">
            <span className="material-symbols-rounded">chevron_left</span>
          </button>
          <button className="m3-btn-icon-small" onClick={handleHeaderNext} title="Next">
            <span className="material-symbols-rounded">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="m3-calendar-content-wrapper">
        {view === 'days' && (
          <table className="m3-calendar-body">
            <thead>
              <tr>
                 <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>
              </tr>
            </thead>
            <tbody>
              {renderCells()}
            </tbody>
          </table>
        )}

        {view === 'months' && (
          <div className="m3-calendar-grid-view">
            {shortMonthNames.map((name, i) => (
              <div 
                key={name} 
                className={`m3-calendar-grid-item ${month === i ? 'selected' : ''}`}
                onClick={() => handleMonthChange(i)}
              >
                {name}
              </div>
            ))}
          </div>
        )}

        {view === 'years' && (
          <div className="m3-calendar-grid-view">
            {yearsList.map(y => (
              <div 
                key={y} 
                className={`m3-calendar-grid-item ${year === y ? 'selected' : ''}`}
                onClick={() => handleYearChange(y)}
              >
                {y}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="m3-calendar-footer">
        <button 
          className="m3-btn-text-small" 
          onClick={() => {
            setCurrentDate(new Date());
            setView('days');
            setYearPage(new Date().getFullYear());
          }}
        >
          Hôm nay
        </button>
      </div>
    </div>
  );
};

export default Calendar;
