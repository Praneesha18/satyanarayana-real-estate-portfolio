import React from 'react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../../config/business';
import { MessageCircle, ArrowDownCircle, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import './Hero.scss';

interface HeroProps {
  onExploreProperties: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProperties }) => {
  const handleScrollToProperties = (e: React.MouseEvent) => {
    e.preventDefault();
    onExploreProperties();
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="container hero__container">
        {/* Left Column: Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <ShieldCheck size={16} className="hero__badge-icon" />
            <span>Direct & Trusted Local Property Consultant</span>
          </div>

          <h1 className="hero__title">
            Find the Right Property for <span className="hero__title-highlight">Your Future</span>
          </h1>

          <p className="hero__subtitle">
            Open plots, residential plots, and independent houses available across{' '}
            <strong className="hero__subtitle-location">
              {BUSINESS_CONFIG.serviceAreas.slice(0, 3).join(', ')} & surrounding areas
            </strong>
            . Direct assistance, transparent dealings, and personalized site visits.
          </p>

          <div className="hero__features-pills">
            <span className="hero__pill">
              <CheckCircle2 size={15} /> Open Plots
            </span>
            <span className="hero__pill">
              <CheckCircle2 size={15} /> Residential Plots
            </span>
            <span className="hero__pill">
              <CheckCircle2 size={15} /> Independent Houses
            </span>
          </div>

          <div className="hero__actions">
            <button onClick={handleScrollToProperties} className="btn btn-primary btn-lg hero__btn-primary">
              <span>View Properties</span>
              <ArrowDownCircle size={20} />
            </button>

            <a
              href={getWhatsAppUrl(BUSINESS_CONFIG.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg hero__btn-whatsapp"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="hero__trust-strip">
            <div className="hero__trust-item">
              <MapPin size={16} className="hero__trust-icon" />
              <span>Direct Property Guidance in {BUSINESS_CONFIG.address.city}</span>
            </div>
            <div className="hero__trust-item">
              <ShieldCheck size={16} className="hero__trust-icon" />
              <span>No Mediators • Direct Communication</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dad's Profile Photo */}
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div className="hero__image-glow" aria-hidden="true" />
            <div className="hero__image-card">
              <img
                src={BUSINESS_CONFIG.photoUrl}
                alt={`Photo of ${BUSINESS_CONFIG.ownerName} - ${BUSINESS_CONFIG.role}`}
                className="hero__image"
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  // Fallback if image path has issue
                  (e.currentTarget as HTMLImageElement).src = '/images/dad-photo.jpeg';
                }}
              />
              <div className="hero__image-badge">
                <div className="hero__image-badge-dot" />
                <div className="hero__image-badge-text">
                  <strong>{BUSINESS_CONFIG.ownerName}</strong>
                  <span>{BUSINESS_CONFIG.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
