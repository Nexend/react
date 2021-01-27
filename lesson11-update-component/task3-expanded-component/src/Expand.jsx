import React from 'react';

const Expand = ({ children, title, isOpen, onToggle }) => {
  let content;
  let arrow;

  if (!isOpen) {
    arrow = <i className="fas fa-chevron-down"></i>;
    content = <div className="expand__content"></div>;
  } else {
    arrow = <i className="fas fa-chevron-up"></i>;
    content = <div className="expand__content">{children}</div>;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
          {arrow}
        </button>
      </div>
      {content}
    </div>
  );
};

export default Expand;
