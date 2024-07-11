import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/login', { username, password })
      .then(response => {
        console.log('Logged in successfully:', response.data);
        localStorage.setItem('token', response.data.token); // Store JWT token
        setError(null);
        // Redirect to protected route or home page
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
        setError('Invalid credentials');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;
