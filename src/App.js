import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import Feedback from './components/Feedback';
import Recommendation from './components/Recommendation';
import DSCVRContent from './components/DSCVRContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchFilter from './components/SearchFilter';
import TrendingContent from './components/TrendingContent';
import Notifications from './components/Notifications';
import ContentSubmission from './components/ContentSubmission';
import UserAnalytics from './components/UserAnalytics';

function App() {
  const [rating, setRating] = useState(0);
  const handleSearch = (query) => {
  };

  return (
    <div className="app-container">
      <Navbar className="app-navbar" />
      <Notifications />
      <SearchFilter onSearch={handleSearch} />
      <div className="container main-content">
        <h1 className="text-center mb-5">DSCVR Canvas App</h1>
        <UserProfile />
        <Feedback setRating={setRating} />
        <Recommendation rating={rating} />
        <DSCVRContent />
        <TrendingContent />
        <ContentSubmission />
        <UserAnalytics />

      </div>

      <footer className="footer-custom">
        <p>&copy; 2024 DSCVR Canvas. All Rights Reserved.</p>
        <a href="/">Privacy Policy</a>
      </footer>
    </div>
  );
}
export default App;
