import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section" style={{ '--section-index': 0 }}>
          <h3 className="footer-title">About Us</h3>
          <div className="footer-links">
            <Link to="/about" className="footer-link">Our Story</Link>
            <Link to="/team" className="footer-link">Team</Link>
          </div>
        </div>
        
        <div className="footer-section" style={{ '--section-index': 1 }}>
          <h3 className="footer-title">Recipes</h3>
          <div className="footer-links">
            <Link to="/recipes" className="footer-link">All Recipes</Link>
          </div>
        </div>

        <div className="footer-section" style={{ '--section-index': 2 }}>
          <h3 className="footer-title">Connect</h3>
          <div className="social-links">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>

        <div className="footer-section" style={{ '--section-index': 3 }}>
          <h3 className="footer-title">Contact</h3>
          <div className="contact-info">
            <p>Email: zaiqahub@gmail.com</p>
            <p>Phone: (+92) 325 1575 822</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zaiqahub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;