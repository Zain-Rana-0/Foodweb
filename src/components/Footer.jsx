import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <div className="footer-links">
            <Link to="/about" className="footer-link">Our Story</Link>
            <Link to="/team" className="footer-link">Team</Link>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Recipes</h3>
          <div className="footer-links">
            <Link to="/recipes" className="footer-link">All Recipes</Link>
            {/* <Link to="/categories" className="footer-link">Categories</Link> */}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <div className="social-links">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">TW</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <div className="contact-info">
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pakistani Desi Recipes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;