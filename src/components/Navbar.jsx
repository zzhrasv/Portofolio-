import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, User } from 'lucide-react'
import '../styles/navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container clay-card">
        <div className="navbar-logo">
          <div className="logo-icon">
            <User size={18} />
          </div>
          <span>Zzhrasv.Dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <a href="#hero" className="menu-link">Home</a>
          <a href="#about" className="menu-link">About</a>
          <a href="#services" className="menu-link">Services</a>
          <a href="#contact" className="menu-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle clay-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="menu-toggle clay-button" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu clay-card">
          <a href="#hero" className="mobile-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
          <a href="#services" className="mobile-link" onClick={closeMenu}>Services</a>
          <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
