import React from 'react';
import '../styles/largeScreenPages.css';

/**
 * LargeScreenPage1 - Welcome page with greeting
 */
const LargeScreenPage1 = () => {
  return (
    <div className="large-screen-page">
      {/* Header */}
      <div className="large-screen-header">
        <img src="/assets/Header.svg" alt="Header" className="header-img" />
      </div>

      {/* Background Image */}
      <div className="large-screen-background">
        <img src="/assets/LargeScreenFirst.png" alt="Background" className="background-img" />
      </div>

      {/* Content */}
      <div className="large-screen-content">
        <h1 className="large-screen-title">Hello, there! 👋</h1>
        <p className="large-screen-subtitle">Welcome to Connected Commerce.</p>
        
        <p className="large-screen-description">
          Please proceed on the interactive screen to begin
        </p>
      </div>
    </div>
  );
};

export default LargeScreenPage1;
