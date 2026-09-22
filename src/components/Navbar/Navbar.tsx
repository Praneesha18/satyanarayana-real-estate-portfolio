import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl } from '../../config/business';
import { Phone, Menu, X, Building2 } from 'lucide-react';
import './Navbar.scss';

interface NavbarProps {
  onNavigateToForm?: (propertyType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleEnquireClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateToForm) {
      onNavigateToForm();
    } else {
      const formElement = document.getElementById('enquire');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar__brand" onClick={(e) => handleNavClick(e, 'hero')}>
          <div className="navbar__logo-icon">
            <Building2 size={22} />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-title">{BUSINESS_CONFIG.businessName}</span>
            <span className="navbar__brand-subtitle">Property Consultant</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar__nav" aria-label="Main Navigation">
          <ul className="navbar__links">
            <li>
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            </li>
            <li>
              <a href="#properties" onClick={(e) => handleNavClick(e, 'properties')}>Properties</a>
            </li>
            <li>
              <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')}>Why Choose Us</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About {BUSINESS_CONFIG.ownerName}</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <a href={getPhoneCallUrl()} className="navbar__call-btn" title="Call directly">
            <Phone size={16} />
            <span>{BUSINESS_CONFIG.phone}</span>
          </a>
          <button onClick={handleEnquireClick} className="btn btn-primary navbar__cta-btn">
            Enquire Now
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar__mobile-drawer ${isMobileMenuOpen ? 'navbar__mobile-drawer--open' : ''}`}>
        <nav aria-label="Mobile Navigation">
          <ul className="navbar__mobile-links">
            <li>
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            </li>
            <li>
              <a href="#properties" onClick={(e) => handleNavClick(e, 'properties')}>Property Categories</a>
            </li>
            <li>
              <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')}>Why Choose Us</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About {BUSINESS_CONFIG.ownerName}</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact & Location</a>
            </li>
          </ul>

          <div className="navbar__mobile-actions">
            <button onClick={handleEnquireClick} className="btn btn-primary btn-full">
              Enquire Now
            </button>
            <a href={getPhoneCallUrl()} className="btn btn-secondary btn-full">
              <Phone size={18} />
              Call {BUSINESS_CONFIG.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
