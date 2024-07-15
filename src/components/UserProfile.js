import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const UserProfile = () => {
  // Replace with actual user data
  const user = {
    username: 'testuser',
    email: 'testuser@example.com'
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6">Username</Typography>
        <Typography variant="body1" gutterBottom>{user.username}</Typography>
        <Typography variant="h6">Email</Typography>
        <Typography variant="body1">{user.email}</Typography>
      </Paper>
    </Box>
  );
};

export default UserProfile;
