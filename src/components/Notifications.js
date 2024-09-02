import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications
    setNotifications([
      { id: 1, message: 'New content available!' },
      { id: 2, message: 'You have a new follower!' }
    ]);
  }, []);

  return (
    <div className="notifications">
      <button className="notification-bell">
        <span className="badge">{notifications.length}</span>
      </button>
      <div className="notification-dropdown">
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
