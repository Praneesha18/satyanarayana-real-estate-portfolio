import React from 'react';
import { Map, ShieldCheck, UserCheck, Eye } from 'lucide-react';
import './WhyChooseUs.scss';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Map size={26} />,
      title: 'Local Knowledge',
      description: 'Deep understanding of local property trends, developing growth sectors, road connectivity, and upcoming residential zones in and around the city.',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Genuine Properties',
      description: 'We help customers explore genuine property options directly, providing clear information on land dimensions and layout features.',
    },
    {
      icon: <UserCheck size={26} />,
      title: 'Direct Assistance',
      description: 'Communicate directly with the consultant handling your property requirement without dealing with multiple middlemen or confusing call centers.',
    },
    {
      icon: <Eye size={26} />,
      title: 'Site Visit Support',
      description: 'Personalized coordination and accompanied site visits so you can inspect properties firsthand before making any decision.',
    },
  ];

  return (
    <section id="why-us" className="section why-choose-us">
      <div className="container">
        <div className="section-header">
          <span className="badge">Trust & Reliability</span>
          <h2>Why Consult With Us</h2>
          <p>
            Real estate decisions are significant milestones. Here is why buyers and investors choose to
            work with us directly.
          </p>
        </div>

        <div className="why-choose-us__grid">
          {points.map((item, idx) => (
            <div key={idx} className="why-choose-us__card">
              <div className="why-choose-us__icon-box">
                {item.icon}
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
