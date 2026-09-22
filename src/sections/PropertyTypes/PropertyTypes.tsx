import React from 'react';
import { PropertyCard, PropertyCardProps } from '../../components/PropertyCard/PropertyCard';
import { PropertyCategory } from '../../types/enquiry';
import { BUSINESS_CONFIG } from '../../config/business';
import { Trees, Compass, Home } from 'lucide-react';
import './PropertyTypes.scss';

interface PropertyTypesProps {
  onSelectCategory: (category: PropertyCategory) => void;
}

export const PropertyTypes: React.FC<PropertyTypesProps> = ({ onSelectCategory }) => {
  const propertyCards: Omit<PropertyCardProps, 'onSelectCategory'>[] = [
    {
      category: 'Open Plot',
      title: 'Open Plots',
      tagline: 'High Growth Investment',
      description: 'Explore verified open plots suitable for long-term investment, future appreciation, and commercial or residential development.',
      highlights: [
        'Strategic growth corridors & road access',
        'Clear title & transparent documentation',
        'High capital appreciation potential',
        'Personal guidance & guided site inspections'
      ],
      icon: <Trees size={28} />,
      badge: 'Investment Ready',
      customWhatsAppMessage: BUSINESS_CONFIG.whatsappMessages.openPlots,
    },
    {
      category: 'Residential Plot',
      title: 'Residential Plots',
      tagline: 'Build Your Dream Home',
      description: 'Find well-planned residential plots in peaceful, developing neighbourhoods ready for immediate or planned home construction.',
      highlights: [
        'Gated layout & residential community zones',
        'Essential utilities & road connectivity',
        'Direct consultation on layout feasibility',
        'Assistance in site verification & dimensions'
      ],
      icon: <Compass size={28} />,
      badge: 'Popular Choice',
      customWhatsAppMessage: BUSINESS_CONFIG.whatsappMessages.residentialPlots,
    },
    {
      category: 'Independent House',
      title: 'Independent Houses',
      tagline: 'Private & Spacious Living',
      description: 'Explore standalone individual houses offering privacy, custom living spaces, private compound areas, and excellent connectivity.',
      highlights: [
        'Independent standalone residential properties',
        'Private parking & spacious floor plans',
        'Peaceful residential localities',
        'End-to-end direct seller coordination'
      ],
      icon: <Home size={28} />,
      badge: 'Ready Living',
      customWhatsAppMessage: BUSINESS_CONFIG.whatsappMessages.independentHouses,
    },
  ];

  return (
    <section id="properties" className="section property-types">
      <div className="container">
        <div className="section-header">
          <span className="badge">Property Categories</span>
          <h2>What We Specialize In</h2>
          <p>
            Whether you are looking to invest in high-potential land or build your family's future home,
            explore our core property categories below and enquire directly.
          </p>
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
