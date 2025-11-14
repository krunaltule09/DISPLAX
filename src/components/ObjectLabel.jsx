import React from 'react';

const ObjectLabel = ({ text }) => {
  return (
    <div className="object-label-svg-wrapper" aria-hidden>
      <img src="/assets/label.svg" alt="label" className="object-label-svg" />
      <div className="object-label-text-svg">{text}</div>
    </div>
  );
};

export default ObjectLabel;
