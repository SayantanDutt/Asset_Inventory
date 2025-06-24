// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Asset Inventory</h1>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
