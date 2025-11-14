import React from 'react';
import '../styles/largeScreenPages.css';

/**
 * LargeScreenPage2 - Avatar introduction page
 */
const LargeScreenPage2 = () => {
  return (
    <div className="large-screen-page">
      {/* Header */}
      <div className="large-screen-header">
        <img src="/assets/Header.svg" alt="Header" className="header-img" />
      </div>

      {/* Content Container */}
      <div className="large-screen-content-wrapper">
        {/* Left Content */}
        <div className="large-screen-left-content">
          <h1 className="large-screen-title">Hi Julia 👋</h1>
          <p className="large-screen-subtitle">Let's begin your journey</p>
          
          <p className="large-screen-description">
            Welcome to Connected Commerce. Step into a seamless connected commerce experience where your purchases, preferences, and payments come together effortlessly.
          </p>

          <p className="large-screen-description">
            This interface brings personalized offers, real-time inventory, and frictionless checkout into one unified view—designed for convenience, speed, and delight.
          </p>
        </div>

        {/* Right Avatar */}
        <div className="large-screen-avatar-container">
          <img src="/assets/Avatar.svg" alt="Avatar" className="avatar-img" />
        </div>
      </div>
    </div>
  );
};

export default LargeScreenPage2;
