import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          {isAuthenticated ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/register">Register</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
