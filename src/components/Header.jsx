import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll status
      setIsScrolled(window.scrollY > 50);

      // Update scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className={`header ${isScrolled ? 'header--glass' : ''}`}>
      <nav className="nav">
        <div className='logoandtitle'>
          <img className="Logo" src="/images/chef.png" alt="" srcset="" />
          <h3 className="title">ZaiqaHub </h3>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {isAuthenticated ? (
            <>
              <li>
                <Link 
                  to="/" 
                  className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/recipes" 
                  className={`navbar-link ${location.pathname === '/recipes' ? 'active' : ''}`}
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
             
              <li>
                <button 
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="navbar-link">Login</Link>
              </li>
              <li>
                <Link to="/registration" className="navbar-link">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      {/* <DarkMode /> */}
    </header>
  );
};

export default Header;