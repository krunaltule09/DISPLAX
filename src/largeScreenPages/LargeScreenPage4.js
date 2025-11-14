import React from 'react';
import '../styles/largeScreenPages.css';

/**
 * LargeScreenPage4 - Full screen image page
 */
const LargeScreenPage4 = () => {
  return (
    <div className="large-screen-page">
      {/* Header */}
      <div className="large-screen-header">
        <img src="/assets/Header.svg" alt="Header" className="header-img" />
      </div>

      {/* Full Screen Image */}
      <div className="large-screen-fullscreen-container">
        <img src="/assets/LargeScreenLast.svg" alt="Large Screen" className="fullscreen-img" />
      </div>

        {/* EY Logo */}
      <div className="large-screen-footer-logo">
        <img src="/assets/EY_Logo_Beam_STFWC_Stacked_RGB_White_Yellow_EN 2.svg" alt="EY Logo" />
      </div>

    </div>
  );
};

export default LargeScreenPage4;
