import React from 'react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../../config/business';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.scss';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl(BUSINESS_CONFIG.whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Satyanarayana on WhatsApp"
      title="Chat with Satyanarayana on WhatsApp"
    >
      <div className="floating-whatsapp-btn__pulse" aria-hidden="true" />
      <MessageCircle size={28} className="floating-whatsapp-btn__icon" />
      <span className="floating-whatsapp-btn__tooltip">Chat on WhatsApp</span>
    </a>
  );
};
