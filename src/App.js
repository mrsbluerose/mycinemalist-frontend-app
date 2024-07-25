import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import MovieSearchPage from './pages/MovieSearchPage';
import MovieListManager from './components/MovieListManager';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  useEffect(() => {
    localStorage.removeItem('jwt_token');
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jwt_token'));

  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:8080';

    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('jwt_token');
        if (token && !config.url.includes('/auth/login') && !config.url.includes('/users/register')) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt_token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('jwt_token'));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Container>
          <Routes>
            <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/search" element={<PrivateRoute><MovieSearchPage /></PrivateRoute>} />
            <Route path="/movie-list-manager" element={<PrivateRoute><MovieListManager /></PrivateRoute>} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
