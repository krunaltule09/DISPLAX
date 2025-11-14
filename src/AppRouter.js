import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaceDevicePage from './pages/PlaceDevicePage';
import ConsentPage from './pages/ConsentPage';
import CarCenterPage from './pages/CarCenterPage';
import CanvasApp from './CanvasApp';
import LargeScreenPage1 from './largeScreenPages/LargeScreenPage1';
import LargeScreenPage2 from './largeScreenPages/LargeScreenPage2';
import LargeScreenPage3 from './largeScreenPages/LargeScreenPage3';
import LargeScreenPage4 from './largeScreenPages/LargeScreenPage4';

/**
 * AppRouter component - Main routing component
 * Mobile flow:
 * 1. / - Home page
 * 2. /place-device - Place device page
 * 3. /consent - Consent page with waveform
 * 4. /car-center - Car center page with options
 * 5. /canvas - Interactive canvas with all objects
 * 
 * Large screen flow:
 * 1. /largePages/page1 - Welcome page
 * 2. /largePages/page2 - Avatar page
 * 3. /largePages/page3 - Globe page
 * 4. /largePages/page4 - Full screen page
 */
function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Mobile Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/place-device" element={<PlaceDevicePage />} />
        <Route path="/consent" element={<ConsentPage />} />
        <Route path="/car-center" element={<CarCenterPage />} />
        <Route path="/canvas" element={<CanvasApp />} />
        
        {/* Large Screen Routes */}
        <Route path="/largePages/page1" element={<LargeScreenPage1 />} />
        <Route path="/largePages/page2" element={<LargeScreenPage2 />} />
        <Route path="/largePages/page3" element={<LargeScreenPage3 />} />
        <Route path="/largePages/page4" element={<LargeScreenPage4 />} />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
