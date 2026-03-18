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

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className={`m3-calendar ${className}`} style={style} {...props}>
      <div className="m3-calendar-header">
        <button className="material-symbols-rounded m3-btn-icon" onClick={prevMonth} style={{border: 'none', background:'none', cursor:'pointer'}}>chevron_left</button>
        <div>{monthNames[month]} {year}</div>
        <button className="material-symbols-rounded m3-btn-icon" onClick={nextMonth} style={{border: 'none', background:'none', cursor:'pointer'}}>chevron_right</button>
      </div>
      <table className="m3-calendar-body">
        <thead>
          <tr>
             <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
          </tr>
        </thead>
        <tbody>
          {renderCells()}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
