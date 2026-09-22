import React from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl, getWhatsAppUrl } from '../../config/business';
import { Phone, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import './AboutOwner.scss';

export const AboutOwner: React.FC = () => {
  return (
    <section id="about" className="section about-owner">
      <div className="container">
        <div className="about-owner__card">
          <div className="about-owner__grid">
            {/* Left: Dad's Profile Photo */}
            <div className="about-owner__visual">
              <div className="about-owner__image-container">
                <img
                  src={BUSINESS_CONFIG.photoUrl}
                  alt={`Portrait of ${BUSINESS_CONFIG.ownerName}`}
                  className="about-owner__image"
                  loading="lazy"
                />
                <div className="about-owner__image-tag">
                  <span className="about-owner__image-tag-label">{BUSINESS_CONFIG.role}</span>
                </div>
              </div>
            </div>

            {/* Right: Owner Biography & Direct Contact */}
            <div className="about-owner__content">
              <span className="badge">Direct Consultant Profile</span>
              <h2 className="about-owner__title">Meet {BUSINESS_CONFIG.ownerName}</h2>
              <h3 className="about-owner__role-heading">{BUSINESS_CONFIG.role}</h3>

              <p className="about-owner__bio">
                "I help customers find suitable plots and independent houses based on their exact
                requirements, preferred locations, and budget. Whether you are looking for long-term land
                investments or a plot for your dream house, I ensure direct communication, clear guidance,
                and genuine assistance at every step."
              </p>

              <div className="about-owner__details">
                <div className="about-owner__detail-item">
                  <MapPin size={18} className="about-owner__detail-icon" />
                  <div>
                    <strong>Focus Locations:</strong>
                    <span>{BUSINESS_CONFIG.serviceAreas.join(', ')}</span>
                  </div>
                </div>

                <div className="about-owner__detail-item">
                  <CheckCircle size={18} className="about-owner__detail-icon" />
                  <div>
                    <strong>Core Offerings:</strong>
                    <span>Open Plots • Residential Plots • Independent Houses</span>
                  </div>
                </div>
              </div>

              <div className="about-owner__actions">
                <a href={getPhoneCallUrl()} className="btn btn-secondary btn-lg">
                  <Phone size={18} />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>

                <a
                  href={getWhatsAppUrl(BUSINESS_CONFIG.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
