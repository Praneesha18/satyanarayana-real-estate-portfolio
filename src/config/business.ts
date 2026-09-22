/**
 * Central Business Configuration
 * 
 * Update this single file to change business name, owner details, contact numbers,
 * service locations, and prefilled WhatsApp messages across the entire website.
 */

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  ownerName: string;
  role: string;
  phone: string;
  rawPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  serviceAreas: string[];
  googleMapsUrl: string;
  photoUrl: string;
  whatsappMessages: {
    general: string;
    openPlots: string;
    residentialPlots: string;
    independentHouses: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  businessName: "Satyanarayana Real Estate",
  tagline: "Your Trusted Partner for Genuine Plots & Homes",
  ownerName: "Satyanarayana",
  role: "Real Estate Consultant & Property Advisor",
  phone: "+91 98765 43210",
  rawPhone: "+919876543210",
  whatsappNumber: "919876543210",
  email: "contact@satyanarayanarealestate.com",
  address: {
    line1: "D.No. 12-34/5, Main Commercial Road",
    line2: "Near RTC Complex",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pincode: "530016",
    full: "Main Commercial Road, Near RTC Complex, Visakhapatnam, Andhra Pradesh 530016",
  },
  serviceAreas: [
    "Madhurawada",
    "Bhogapuram Highway",
    "Anandapuram",
    "Tagarapuvalasa",
    "Pendurthi",
    "Gajuwaka & Surrounding Areas",
  ],
  googleMapsUrl: "https://maps.google.com/?q=Visakhapatnam+Andhra+Pradesh",
  photoUrl: "/images/dad-photo.jpeg",
  whatsappMessages: {
    general: "Hello Satyanarayana garu, I found your website and I am interested in exploring available properties. Please share more details.",
    openPlots: "Hello Satyanarayana garu, I am interested in Open Plots for investment. Please share available options and site locations.",
    residentialPlots: "Hello Satyanarayana garu, I am looking for Residential Plots to build a house. Please share available plot details.",
    independentHouses: "Hello Satyanarayana garu, I am interested in Independent Houses. Please share available houses and pricing details.",
  },
  stats: [
    { label: "Property Guidance", value: "100% Direct" },
    { label: "Prime Categories", value: "3 Types" },
    { label: "Site Visit Assistance", value: "Dedicated" },
    { label: "Consultation", value: "Free & Transparent" },
  ],
};

/**
 * Helper to generate a direct WhatsApp chat URL with encoded prefilled text
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BUSINESS_CONFIG.whatsappMessages.general;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper to generate a direct tel: link
 */
export function getPhoneCallUrl(): string {
  return `tel:${BUSINESS_CONFIG.rawPhone}`;
}
