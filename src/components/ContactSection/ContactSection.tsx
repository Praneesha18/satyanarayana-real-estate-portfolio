import React from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl, getWhatsAppUrl } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MessageCircle, MapPin, ExternalLink, Clock } from 'lucide-react';
import './ContactSection.scss';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();

  const whatsappMessage =
    language === 'te'
      ? BUSINESS_CONFIG.whatsappMessages.generalTe
      : BUSINESS_CONFIG.whatsappMessages.general;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">{t.contact.badge}</span>
          <h2>{t.contact.heading}</h2>
          <p>{t.contact.subheading}</p>
        </div>

        <div className="contact-cards-grid">
          {/* Phone Card */}
          <div className="contact-card">
            <div className="contact-card__icon contact-card__icon--phone">
              <Phone size={26} />
            </div>
            <h3 className="contact-card__title">{t.contact.phoneCard.title}</h3>
            <p className="contact-card__text">
              {t.contact.phoneCard.text}
            </p>
            <a href={getPhoneCallUrl()} className="contact-card__highlight-link">
              {BUSINESS_CONFIG.phone}
            </a>
            <a href={getPhoneCallUrl()} className="btn btn-secondary btn-full contact-card__btn">
              <Phone size={16} />
              <span>{t.contact.phoneCard.btn}</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="contact-card contact-card--featured">
            <div className="contact-card__badge">{t.contact.whatsappCard.badge}</div>
            <div className="contact-card__icon contact-card__icon--whatsapp">
              <MessageCircle size={26} />
            </div>
            <h3 className="contact-card__title">{t.contact.whatsappCard.title}</h3>
            <p className="contact-card__text">
              {t.contact.whatsappCard.text}
            </p>
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card__highlight-link contact-card__highlight-link--whatsapp"
            >
              +{BUSINESS_CONFIG.whatsappNumber}
            </a>
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-full contact-card__btn"
            >
              <MessageCircle size={16} />
              <span>{t.contact.whatsappCard.btn}</span>
            </a>
          </div>

          {/* Office Address Card */}
          <div className="contact-card">
            <div className="contact-card__icon contact-card__icon--location">
              <MapPin size={26} />
            </div>
            <h3 className="contact-card__title">{t.contact.addressCard.title}</h3>
            <p className="contact-card__text">
              <strong>{BUSINESS_CONFIG.address.landmark}</strong>, {BUSINESS_CONFIG.address.area}, {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state}
            </p>
            <div className="contact-card__hours">
              <Clock size={14} />
              <span>{t.contact.addressCard.hours}</span>
            </div>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-full contact-card__btn"
            >
              <span>{t.contact.addressCard.btn}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Service Locations Strip */}
        <div className="service-areas-box">
          <h4>{t.contact.serviceAreasHeading}</h4>
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
