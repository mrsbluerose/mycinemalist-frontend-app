import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography, Alert } from '@mui/material';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { username, password });
      localStorage.setItem('jwt_token', response.data.token);
      setIsAuthenticated(true); // Update authentication state
      navigate('/'); // Redirect to the homepage after successful login
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
