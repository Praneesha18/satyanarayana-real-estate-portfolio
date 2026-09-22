import React from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl, getWhatsAppUrl } from '../../config/business';
import { Phone, MessageCircle, MapPin, ExternalLink, Clock } from 'lucide-react';
import './ContactSection.scss';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Direct Communication</span>
          <h2>Contact Us Directly</h2>
          <p>
            Have questions about a plot or want to schedule a site inspection? Reach out to{' '}
            {BUSINESS_CONFIG.ownerName} directly via phone, WhatsApp, or visit our office.
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Phone Card */}
          <div className="contact-card">
            <div className="contact-card__icon contact-card__icon--phone">
              <Phone size={26} />
            </div>
            <h3 className="contact-card__title">Direct Phone Call</h3>
            <p className="contact-card__text">
              Speak directly with {BUSINESS_CONFIG.ownerName} regarding property inquiries, site visits, or consultation.
            </p>
            <a href={getPhoneCallUrl()} className="contact-card__highlight-link">
              {BUSINESS_CONFIG.phone}
            </a>
            <a href={getPhoneCallUrl()} className="btn btn-secondary btn-full contact-card__btn">
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="contact-card contact-card--featured">
            <div className="contact-card__badge">Instant Response</div>
            <div className="contact-card__icon contact-card__icon--whatsapp">
              <MessageCircle size={26} />
            </div>
            <h3 className="contact-card__title">WhatsApp Chat</h3>
            <p className="contact-card__text">
              Send a quick message on WhatsApp to receive available plot locations, brochures, and layout plans.
            </p>
            <a
              href={getWhatsAppUrl(BUSINESS_CONFIG.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card__highlight-link contact-card__highlight-link--whatsapp"
            >
              +{BUSINESS_CONFIG.whatsappNumber}
            </a>
            <a
              href={getWhatsAppUrl(BUSINESS_CONFIG.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-full contact-card__btn"
            >
              <MessageCircle size={16} />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Office Address Card */}
          <div className="contact-card">
            <div className="contact-card__icon contact-card__icon--location">
              <MapPin size={26} />
            </div>
            <h3 className="contact-card__title">Office Location</h3>
            <p className="contact-card__text">
              {BUSINESS_CONFIG.address.full}
            </p>
            <div className="contact-card__hours">
              <Clock size={14} />
              <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
            </div>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-full contact-card__btn"
            >
              <span>Get Directions</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Service Locations Strip */}
        <div className="service-areas-box">
          <h4>Key Areas Covered & Site Visit Locations:</h4>
          <div className="service-areas-tags">
            {BUSINESS_CONFIG.serviceAreas.map((area, idx) => (
              <span key={idx} className="service-area-tag">
                <MapPin size={13} />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
