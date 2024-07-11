import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Temporarily bypass authentication check
  // const isAuthenticated = true; // Always allow access for testing
  const isAuthenticated = !!localStorage.getItem('token');
  

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
