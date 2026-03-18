import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <div style={{ display: "flex", gap: "8px" }}>
          <span className="code-block-label">JSX</span>
        </div>
        <button onClick={copyToClipboard} className="copy-btn">
          <span
            className="material-symbols-rounded"
            style={{ fontSize: "18px" }}
          >
            {copied ? "check" : "content_copy"}
          </span>
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const ExampleCard = ({ title, description, component, code }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="example-card">
      <div className="example-preview">{component}</div>
      <div className="example-info">
        <div className="example-header">
          <div className="example-title">{title}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            marginTop: "8px",
          }}
        >
          <div
            className="example-description m3-body-medium"
            style={{ flex: 1, margin: 0 }}
          >
            {description}
          </div>
          <div className="example-actions">
            <button
              className="example-action-btn"
              onClick={() => setShowCode(!showCode)}
              title={showCode ? "Ẩn code" : "Hiện code"}
            >
              <span className="material-symbols-rounded">
                {showCode ? "unfold_less" : "data_object"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="example-code-wrapper">
              <CodeBlock code={code} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Showcase = ({ title, description, component, code, whenToUse }) => {
  // If we have 'whenToUse', we render the full component page style
  if (whenToUse) {
    return (
      <div className="component-doc-page">
        <div className="doc-section hero-section">
          <h1 className="m3-display-small">{title}</h1>
          <p className="m3-body-large doc-intro">{description}</p>
        </div>

        <div className="doc-section when-to-use-section">
          <h2 className="doc-section-title"># When To Use</h2>
          <div className="doc-content m3-body-medium">
            {typeof whenToUse === "string" ? <p>{whenToUse}</p> : whenToUse}
          </div>
        </div>

        <div className="doc-section examples-section">
          <h2 className="doc-section-title">Examples</h2>
          <div className="examples-container">
            {/* If component and code are passed directly, wrap them in a card */}
            {component && (
              <ExampleCard
                title="Basic Usage"
                description="The most basic usage of the component."
                component={component}
                code={code}
              />
            )}
            {/* Future support for array of examples could go here */}
          </div>
        </div>
      </div>
    );
  }

  // Legacy fallback for simple showcases
  return (
    <section className="showcase-section">
      <h2 className="showcase-title">{title}</h2>
      {description && <p className="showcase-desc">{description}</p>}
      <div className="showcase-preview">{component}</div>
      <CodeBlock code={code} />
    </section>
  );
};

export { Showcase, CodeBlock, ExampleCard };
