import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Map, ShieldCheck, UserCheck, Eye } from 'lucide-react';
import './WhyChooseUs.scss';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Map size={26} />,
    <ShieldCheck size={26} />,
    <UserCheck size={26} />,
    <Eye size={26} />,
  ];

  return (
    <section id="why-us" className="section why-choose-us">
      <div className="container">
        <div className="section-header">
          <span className="badge">{t.whyUs.badge}</span>
          <h2>{t.whyUs.heading}</h2>
          <p>{t.whyUs.subheading}</p>
        </div>

        <div className="why-choose-us__grid">
          {t.whyUs.items.map((item, idx) => (
            <div key={idx} className="why-choose-us__card">
              <div className="why-choose-us__icon-box">
                {icons[idx]}
              </div>
              <h3 className="why-choose-us__card-title">{item.title}</h3>
              <p className="why-choose-us__card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
