import React, { useState } from 'react';

const UserProfile = () => {
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Profile Submitted:', { userName, bio });
    console.log('Save Profile button clicked');
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text"  placeholder="example@JohnDoe" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <label>Bio:</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
