import React from 'react';

const Descriptions = ({ title, column = 3, children, className = '', style, ...props }) => {
  const items = React.Children.toArray(children);
  const rows = [];
  
  for (let i = 0; i < items.length; i += column) {
    const rowItems = items.slice(i, i + column);
    rows.push(
      <tr key={i}>
        {rowItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <th className="m3-descriptions-item-label">{item.props.label}</th>
            <td className="m3-descriptions-item-content" colSpan={item.props.span || 1}>
              {item.props.children}
            </td>
          </React.Fragment>
        ))}
      </tr>
    );
  }

  return (
    <div className={`m3-descriptions ${className}`} style={style} {...props}>
      {title && <div className="m3-descriptions-title">{title}</div>}
      <div className="m3-descriptions-view">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Item = ({ label, span = 1, children }) => {
  return null; // The rendering is handled by the parent
};

Descriptions.Item = Item;

export default Descriptions;
