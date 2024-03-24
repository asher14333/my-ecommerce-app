import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Logo"/>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
