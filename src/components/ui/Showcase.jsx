import React, { useState } from 'react';

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <span className="code-block-label">JSX</span>
        <button onClick={copyToClipboard} className="copy-btn">
          <span className="material-symbols-rounded">
            {copied ? 'check' : 'content_copy'}
          </span>
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Showcase = ({ title, description, component, code }) => {
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">{title}</h2>
      <p className="showcase-desc">{description}</p>
      
      <div className="showcase-preview">
        {component}
      </div>
      
      <CodeBlock code={code} />
    </section>
  );
};

export { Showcase, CodeBlock };
