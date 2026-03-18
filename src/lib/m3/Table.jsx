import React from 'react';
import clsx from 'clsx';

export const Table = ({ columns, data, className }) => {
  return (
    <div className={clsx('m3-table-container', className)}>
      <table className="m3-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} style={{ width: column.width }}>
                <div className="m3-table-header-cell">
                  {column.title}
                  {column.sortable && (
                    <span className="material-symbols-rounded sort-icon">swap_vert</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
