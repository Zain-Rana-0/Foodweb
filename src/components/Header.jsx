import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="navbar">
    <div className="navbar-container">
      {/* <h1 className="navbar-logo">Pakistani Desi Recipes</h1> */}
      <nav>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/recipes" className="navbar-link">Recipes</Link></li>
          <li><Link to="/about" className="navbar-link">About</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;