import React from 'react';
import '../styles/largeScreenPages.css';

/**
 * LargeScreenPage3 - Globe/Connection page
 */
const LargeScreenPage3 = () => {
  return (
    <div className="large-screen-page large-screen-page-dark">
      {/* Header */}
      <div className="large-screen-header">
        <img src="/assets/Header.svg" alt="Header" className="header-img" />
      </div>

      {/* Content */}
      <div className="large-screen-content-center">
        <h2 className="large-screen-title-center">Connecting your world...</h2>
        
        {/* Globe SVG */}
        <div className="large-screen-globe-container">
          <img src="/assets/Globe.svg" alt="Globe" className="globe-img" />
        </div>

        <p className="large-screen-description-center">
          With your consent, your car, phone, and wearable securely share data with your bank.
        </p>
      </div>

      {/* EY Logo */}
      <div className="large-screen-footer-logo">
        <img src="/assets/EY_Logo_Beam_STFWC_Stacked_RGB_White_Yellow_EN 2.svg" alt="EY Logo" />
      </div>
    </div>
  );
};

export default LargeScreenPage3;
