import React from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl, getWhatsAppUrl } from '../../config/business';
import { Building2, Phone, MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';
import './Footer.scss';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__grid">
          {/* Brand Col */}
          <div className="footer__brand-col">
            <div className="footer__brand">
              <div className="footer__logo-icon">
                <Building2 size={24} />
              </div>
              <div>
                <span className="footer__brand-title">{BUSINESS_CONFIG.businessName}</span>
                <span className="footer__brand-tagline">Real Estate & Property Consultant</span>
              </div>
            </div>

            <p className="footer__desc">
              Dedicated property guidance for open plots, residential layouts, and independent homes.
              We prioritize direct communication, clear information, and hassle-free site visits.
            </p>

            <div className="footer__consultant-badge">
              <span>Direct Consultant: <strong>{BUSINESS_CONFIG.ownerName}</strong></span>
            </div>
          </div>

          {/* Property Categories Col */}
          <div className="footer__col">
            <h4 className="footer__heading">Property Types</h4>
            <ul className="footer__links">
              <li>
                <a href="#properties">Open Plots (Investment)</a>
              </li>
              <li>
                <a href="#properties">Residential Plots (Housing)</a>
              </li>
              <li>
                <a href="#properties">Independent Houses</a>
              </li>
              <li>
                <a href="#enquire">Custom Property Request</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Navigation</h4>
            <ul className="footer__links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#properties">Property Categories</a>
              </li>
              <li>
                <a href="#why-us">Why Choose Us</a>
              </li>
              <li>
                <a href="#about">About {BUSINESS_CONFIG.ownerName}</a>
              </li>
              <li>
                <a href="#enquire">Enquiry Form</a>
              </li>
              <li>
                <a href="#contact">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer__col">
            <h4 className="footer__heading">Get In Touch</h4>
            <ul className="footer__contact-list">
              <li>
                <Phone size={16} className="footer__contact-icon" />
                <a href={getPhoneCallUrl()}>{BUSINESS_CONFIG.phone}</a>
              </li>
              <li>
                <MessageCircle size={16} className="footer__contact-icon" />
                <a
                  href={getWhatsAppUrl(BUSINESS_CONFIG.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +{BUSINESS_CONFIG.whatsappNumber} (WhatsApp)
                </a>
              </li>
              <li>
                <Mail size={16} className="footer__contact-icon" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`}>{BUSINESS_CONFIG.email}</a>
              </li>
              <li>
                <MapPin size={16} className="footer__contact-icon" />
                <span>{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="footer__back-to-top"
            aria-label="Back to top of page"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
