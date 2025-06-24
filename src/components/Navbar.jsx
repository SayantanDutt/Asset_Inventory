import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
      marginBottom: '20px'
    }}>
      <h2 style={{ margin: 0 }}>My Inventory App</h2>
    </nav>
  );
};

export default Navbar;  // ✅ This line is critical!
