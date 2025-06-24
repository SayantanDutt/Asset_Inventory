import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AssetInventory from './components/AssetInventory';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <AssetInventory />
    </div>
  );
};

export default App;
