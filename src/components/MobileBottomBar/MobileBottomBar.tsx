import React from 'react';
import { BUSINESS_CONFIG, getPhoneCallUrl, getWhatsAppUrl } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MessageCircle } from 'lucide-react';
import './MobileBottomBar.scss';

export const MobileBottomBar: React.FC = () => {
  const { language, t } = useLanguage();

  const whatsappMessage =
    language === 'te'
      ? BUSINESS_CONFIG.whatsappMessages.generalTe
      : BUSINESS_CONFIG.whatsappMessages.general;

  return (
    <div className="mobile-bottom-bar" aria-label="Quick Mobile Actions">
      <a
        href={getPhoneCallUrl()}
        className="mobile-bottom-bar__btn mobile-bottom-bar__btn--call"
        title={`Call ${BUSINESS_CONFIG.ownerName}`}
      >
        <Phone size={18} />
        <span>{t.mobileBar.call}</span>
      </a>

      <a
        href={getWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bottom-bar__btn mobile-bottom-bar__btn--whatsapp"
        title="WhatsApp Chat"
      >
        <MessageCircle size={18} />
        <span>{t.mobileBar.whatsapp}</span>
      </a>
    </div>
  );
};
