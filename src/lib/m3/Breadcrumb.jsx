import React from 'react';

const Breadcrumb = ({ children, separator = '/', className = '', style, ...props }) => {
  const items = React.Children.toArray(children);

  return (
    <nav className={`m3-breadcrumb ${className}`} style={style} {...props}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {index < items.length - 1 && (
              <span className="m3-breadcrumb-separator">{separator}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Item = ({ children, href, className = '', ...props }) => {
  if (href) {
    return (
      <a href={href} className={`m3-breadcrumb-link ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <span className={`m3-breadcrumb-link ${className}`} {...props}>
      {children}
    </span>
  );
};

Breadcrumb.Item = Item;

export default Breadcrumb;
