import React from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl, getWhatsAppUrl } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import './AboutOwner.scss';

export const AboutOwner: React.FC = () => {
  const { language, t } = useLanguage();

  const whatsappMessage =
    language === 'te'
      ? BUSINESS_CONFIG.whatsappMessages.generalTe
      : BUSINESS_CONFIG.whatsappMessages.general;

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
                  <span className="about-owner__image-tag-label">{t.aboutOwner.role}</span>
                </div>
              </div>
            </div>

            {/* Right: Owner Biography & Direct Contact */}
            <div className="about-owner__content">
              <span className="badge">{t.aboutOwner.badge}</span>
              <h2 className="about-owner__title">{t.aboutOwner.title}</h2>
              <h3 className="about-owner__role-heading">{t.aboutOwner.role}</h3>

              <p className="about-owner__bio">
                {t.aboutOwner.bio}
              </p>

              <div className="about-owner__details">
                <div className="about-owner__detail-item">
                  <MapPin size={18} className="about-owner__detail-icon" />
                  <div>
                    <strong>{t.aboutOwner.focusAreasLabel}</strong>
                    <span>{BUSINESS_CONFIG.serviceAreas.join(', ')}</span>
                  </div>
                </div>

                <div className="about-owner__detail-item">
                  <CheckCircle size={18} className="about-owner__detail-icon" />
                  <div>
                    <strong>{t.aboutOwner.coreOfferingsLabel}</strong>
                    <span>{t.aboutOwner.coreOfferingsValue}</span>
                  </div>
                </div>
              </div>

              <div className="about-owner__actions">
                <a href={getPhoneCallUrl()} className="btn btn-secondary btn-lg">
                  <Phone size={18} />
                  <span>{t.aboutOwner.btnCall}</span>
                </a>

                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={18} />
                  <span>{t.aboutOwner.btnWhatsApp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
