import React from 'react';

const Typography = ({ children, className = '', ...props }) => {
  return (
    <article className={`m3-typography ${className}`} {...props}>
      {children}
    </article>
  );
};

const Text = ({
  children,
  type = '', // primary, secondary, success, warning, error
  disabled,
  mark,
  code,
  keyboard,
  underline,
  delete: del,
  strong,
  italic,
  className = '',
  ...props
}) => {
  let Tag = 'span';
  let classNames = ['m3-typography-text'];
  if (type) classNames.push(type);
  if (disabled) classNames.push('disabled');
  if (mark) { Tag = 'mark'; classNames.push('m3-typography-mark'); }
  if (code) { Tag = 'code'; classNames.push('m3-typography-code'); }
  if (keyboard) { Tag = 'kbd'; classNames.push('m3-typography-keyboard'); }
  if (underline) classNames.push('m3-typography-underline');
  if (del) classNames.push('m3-typography-through');
  if (strong) classNames.push('m3-typography-bold');
  if (italic) classNames.push('m3-typography-italic');

  return (
    <Tag className={`${classNames.join(' ')} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

const Title = ({ level = 1, children, className = '', ...props }) => {
  const safeLevel = Math.min(Math.max(level, 1), 6);
  const Tag = `h${safeLevel}`;
  return (
    <Tag className={`m3-typography-h${safeLevel} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

const Paragraph = ({ children, className = '', ...props }) => {
  return (
    <p className={`m3-typography-p ${className}`} {...props}>
      {children}
    </p>
  );
};

Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;
