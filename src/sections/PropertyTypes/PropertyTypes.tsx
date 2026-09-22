import React from 'react';
import { PropertyCard } from '../../components/PropertyCard/PropertyCard';
import { PropertyCategory } from '../../types/enquiry';
import { BUSINESS_CONFIG } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import { Trees, Compass, Home } from 'lucide-react';
import './PropertyTypes.scss';

interface PropertyTypesProps {
  onSelectCategory: (category: PropertyCategory) => void;
}

export const PropertyTypes: React.FC<PropertyTypesProps> = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  const propertyCards = [
    {
      category: 'Open Plot' as PropertyCategory,
      title: t.propertyTypes.openPlots.title,
      tagline: t.propertyTypes.openPlots.tagline,
      description: t.propertyTypes.openPlots.description,
      highlights: t.propertyTypes.openPlots.highlights,
      icon: <Trees size={28} />,
      badge: t.propertyTypes.openPlots.badge,
      customWhatsAppMessage: BUSINESS_CONFIG.whatsappMessages.openPlots,
    },
    {
      category: 'Residential Plot' as PropertyCategory,
      title: t.propertyTypes.residentialPlots.title,
      tagline: t.propertyTypes.residentialPlots.tagline,
      description: t.propertyTypes.residentialPlots.description,
      highlights: t.propertyTypes.residentialPlots.highlights,
      icon: <Compass size={28} />,
      badge: t.propertyTypes.residentialPlots.badge,
      customWhatsAppMessage: BUSINESS_CONFIG.whatsappMessages.residentialPlots,
    },
    {
      category: 'Independent House' as PropertyCategory,
      title: t.propertyTypes.independentHouses.title,
      tagline: t.propertyTypes.independentHouses.tagline,
      description: t.propertyTypes.independentHouses.description,
      highlights: t.propertyTypes.independentHouses.highlights,
      icon: <Home size={28} />,
      badge: t.propertyTypes.independentHouses.badge,
      customWhatsAppMessage: BUSINESS_CONFIG.whatsappMessages.independentHouses,
    },
  ];

  return (
    <section id="properties" className="section property-types">
      <div className="container">
        <div className="section-header">
          <span className="badge">{t.propertyTypes.badge}</span>
          <h2>{t.propertyTypes.heading}</h2>
          <p>{t.propertyTypes.subheading}</p>
        </div>

        <div className="property-types__grid">
          {propertyCards.map((card) => (
            <PropertyCard
              key={card.category}
              {...card}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
