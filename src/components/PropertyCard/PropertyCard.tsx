import React from 'react';
import { PropertyCategory } from '../../types/enquiry';
import { getWhatsAppUrl } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import './PropertyCard.scss';

export interface PropertyCardProps {
  category: PropertyCategory;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  badge?: string;
  customWhatsAppMessage: string;
  onSelectCategory: (category: PropertyCategory) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  category,
  title,
  tagline,
  description,
  highlights,
  icon,
  badge,
  customWhatsAppMessage,
  onSelectCategory,
}) => {
  const { t } = useLanguage();

  return (
    <div className="property-card">
      {badge && <span className="property-card__badge">{badge}</span>}

      <div className="property-card__header">
        <div className="property-card__icon-wrapper">{icon}</div>
        <div>
          <span className="property-card__tagline">{tagline}</span>
          <h3 className="property-card__title">{title}</h3>
        </div>
      </div>

      <p className="property-card__description">{description}</p>

      <div className="property-card__highlights">
        <span className="property-card__highlights-label">{t.propertyTypes.highlightsLabel}</span>
        <ul>
          {highlights.map((item, idx) => (
            <li key={idx}>
              <Check size={16} className="property-card__check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="property-card__footer">
        <button
          onClick={() => onSelectCategory(category)}
          className="btn btn-primary btn-full property-card__btn-enquire"
        >
          <span>{t.propertyTypes.btnEnquire}</span>
          <ArrowRight size={18} />
        </button>

        <a
          href={getWhatsAppUrl(customWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-full property-card__btn-wa"
          title={`Chat about ${title} on WhatsApp`}
        >
          <MessageCircle size={18} />
          <span>{t.propertyTypes.btnWhatsApp}</span>
        </a>
      </div>
    </div>
  );
};
