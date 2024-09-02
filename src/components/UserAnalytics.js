import React, { useState, useEffect } from 'react';

const UserAnalytics = () => {
  const [stats, setStats] = useState({ views: 0, likes: 0, comments: 0 });

  useEffect(() => {
    // Fetch user stats
    setStats({ views: 100, likes: 50, comments: 20 });
  }, []);

  return (
    <div className="user-analytics">
      <h2>Your Activity</h2>
      <p>Views: {stats.views}</p>
      <p>Likes: {stats.likes}</p>
      <p>Comments: {stats.comments}</p>
    </div>
  );
};

export default UserAnalytics;
