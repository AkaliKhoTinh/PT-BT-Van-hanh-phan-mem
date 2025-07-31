//header
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <h2>🎬 MovieHub</h2>
      <nav>
        <Link to="/" style={{ marginRight: 10, color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10, color: '#fff' }}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
