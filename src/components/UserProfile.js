import React from 'react';

const UserProfile = () => {
  // Replace with actual user data
  const user = {
    username: 'testuser',
    email: 'testuser@example.com'
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
