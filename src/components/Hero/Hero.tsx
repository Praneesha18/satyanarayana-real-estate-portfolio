import React from 'react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import { MessageCircle, ArrowDownCircle, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import './Hero.scss';

interface HeroProps {
  onExploreProperties: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProperties }) => {
  const { language, t } = useLanguage();

  const handleScrollToProperties = (e: React.MouseEvent) => {
    e.preventDefault();
    onExploreProperties();
  };

  const whatsappMessage =
    language === 'te'
      ? BUSINESS_CONFIG.whatsappMessages.generalTe
      : BUSINESS_CONFIG.whatsappMessages.general;

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="container hero__container">
        {/* Left Column: Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <ShieldCheck size={16} className="hero__badge-icon" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hero__title">
            {t.hero.titleStart}
            <span className="hero__title-highlight">{t.hero.titleHighlight}</span>
          </h1>

          <p className="hero__subtitle">
            {t.hero.subtitle}
          </p>

          <div className="hero__features-pills">
            <span className="hero__pill">
              <CheckCircle2 size={15} /> {t.hero.pillOpenPlots}
            </span>
            <span className="hero__pill">
              <CheckCircle2 size={15} /> {t.hero.pillResidentialPlots}
            </span>
            <span className="hero__pill">
              <CheckCircle2 size={15} /> {t.hero.pillIndependentHouses}
            </span>
          </div>

          <div className="hero__actions">
            <button onClick={handleScrollToProperties} className="btn btn-primary btn-lg hero__btn-primary">
              <span>{t.hero.btnViewProperties}</span>
              <ArrowDownCircle size={20} />
            </button>

            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg hero__btn-whatsapp"
            >
              <MessageCircle size={20} />
              <span>{t.hero.btnWhatsApp}</span>
            </a>
          </div>

          <div className="hero__trust-strip">
            <div className="hero__trust-item">
              <MapPin size={16} className="hero__trust-icon" />
              <span>{t.hero.trustGuidance}</span>
            </div>
            <div className="hero__trust-item">
              <ShieldCheck size={16} className="hero__trust-icon" />
              <span>{t.hero.trustNoMediator}</span>
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
                alt={`Photo of ${BUSINESS_CONFIG.ownerName}`}
                className="hero__image"
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/dad-photo.jpeg';
                }}
              />
              <div className="hero__image-badge">
                <div className="hero__image-badge-dot" />
                <div className="hero__image-badge-text">
                  <strong>{BUSINESS_CONFIG.ownerName}</strong>
                  <span>{t.hero.consultantTag}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
