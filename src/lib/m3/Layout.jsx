import React from 'react';

const Layout = ({ children, className = '', hasSider, style, ...props }) => {
  let hs = hasSider;
  if (hs === undefined) {
    React.Children.forEach(children, child => {
      if (child && child.type && child.type.displayName === 'Sider') {
        hs = true;
      }
    });
  }

  const classNames = ['m3-layout'];
  if (hs) classNames.push('m3-layout-has-sider');

  return (
    <section className={`${classNames.join(' ')} ${className}`} style={style} {...props}>
      {children}
    </section>
  );
};

const Header = ({ children, className = '', style, ...props }) => (
  <header className={`m3-layout-header ${className}`} style={style} {...props}>{children}</header>
);

const Footer = ({ children, className = '', style, ...props }) => (
  <footer className={`m3-layout-footer ${className}`} style={style} {...props}>{children}</footer>
);

const Content = ({ children, className = '', style, ...props }) => (
  <main className={`m3-layout-content ${className}`} style={style} {...props}>{children}</main>
);

const Sider = ({ children, className = '', style, width = 200, collapsedWidth = 80, collapsed, ...props }) => {
  const customStyle = {
    ...style,
    flex: `0 0 ${collapsed ? collapsedWidth : width}px`,
    maxWidth: collapsed ? collapsedWidth : width,
    minWidth: collapsed ? collapsedWidth : width,
    width: collapsed ? collapsedWidth : width,
  };
  return (
    <aside className={`m3-layout-sider ${className}`} style={customStyle} {...props}>
      <div className="m3-layout-sider-children">{children}</div>
    </aside>
  );
};

Sider.displayName = 'Sider';

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;
