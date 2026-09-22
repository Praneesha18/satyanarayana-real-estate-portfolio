import React from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl, getWhatsAppUrl } from '../../config/business';
import { Phone, MessageCircle } from 'lucide-react';
import './MobileBottomBar.scss';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="mobile-bottom-bar" aria-label="Quick Mobile Actions">
      <a
        href={getPhoneCallUrl()}
        className="mobile-bottom-bar__btn mobile-bottom-bar__btn--call"
        title="Direct Call"
      >
        <Phone size={18} />
        <span>Call Now</span>
      </a>

      <a
        href={getWhatsAppUrl(BUSINESS_CONFIG.whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bottom-bar__btn mobile-bottom-bar__btn--whatsapp"
        title="WhatsApp Chat"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
