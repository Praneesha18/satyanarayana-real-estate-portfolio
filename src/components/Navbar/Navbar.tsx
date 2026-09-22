import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Building2, Globe } from 'lucide-react';
import './Navbar.scss';

interface NavbarProps {
  onNavigateToForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnquireClick = () => {
    if (onNavigateToForm) {
      onNavigateToForm();
    } else {
      const formElement = document.getElementById('enquire');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        {/* Brand Logo & Name */}
        <a href="#hero" className="navbar__brand" onClick={scrollToTop}>
          <div className="navbar__logo-icon">
            <Building2 size={24} />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-title">{t.navbar.brandTitle}</span>
            <span className="navbar__brand-subtitle">{t.navbar.brandSubtitle}</span>
          </div>
        </a>

        {/* Right Actions: Language Switcher, Direct Call & Enquire CTA */}
        <div className="navbar__actions">
          {/* Language Switcher */}
          <div className="navbar__lang-switch" role="group" aria-label="Language Selector">
            <Globe size={15} className="navbar__lang-icon" />
            <button
              type="button"
              className={`navbar__lang-btn ${language === 'en' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
            <span className="navbar__lang-divider">|</span>
            <button
              type="button"
              className={`navbar__lang-btn ${language === 'te' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLanguage('te')}
            >
              తెలుగు
            </button>
          </div>

          {/* Direct Phone Call Button */}
          <a
            href={getPhoneCallUrl()}
            className="navbar__call-btn"
            title={`Call ${BUSINESS_CONFIG.ownerName} directly`}
          >
            <Phone size={16} />
            <span>{BUSINESS_CONFIG.phone}</span>
          </a>

          {/* Enquire CTA Button */}
          <button
            type="button"
            onClick={handleEnquireClick}
            className="btn btn-primary navbar__cta-btn"
          >
            {t.navbar.enquireNow}
          </button>
        </div>
      </div>
    </header>
  );
};
