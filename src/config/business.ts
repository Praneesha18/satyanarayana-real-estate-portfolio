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
  fullName: string;
  role: string;
  phone: string;
  rawPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    landmark: string;
    area: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  serviceAreas: string[];
  googleMapsUrl: string;
  spreadsheetUrl: string;
  spreadsheetId: string;
  googleAppsScriptUrl: string;
  photoUrl: string;
  whatsappMessages: {
    general: string;
    generalTe: string;
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
  businessName: "Bheemarasetty Satyanarayana Real Estate",
  tagline: "Your Trusted Partner for Genuine Plots & Homes in Visakhapatnam",
  ownerName: "Bheemarasetty Satyanarayana",
  fullName: "Bheemarasetty Satyanarayana",
  role: "Real Estate Consultant & Property Advisor",
  phone: "+91 88975 82265",
  rawPhone: "+918897582265",
  whatsappNumber: "918897582265",
  email: "contact@satyanarayanarealestate.com",
  address: {
    landmark: "Near Santhoshimatha Temple",
    area: "Thatichetlapalem",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
    full: "Near Santhoshimatha Temple, Thatichetlapalem, Visakhapatnam, Andhra Pradesh, India",
  },
  serviceAreas: [
    "Madhurawada",
    "Bhogapuram Highway",
    "Anandapuram",
    "Tagarapuvalasa",
    "Thatichetlapalem",
    "Pendurthi & Visakhapatnam Regions",
  ],
  googleMapsUrl: "https://maps.google.com/?q=Near+Santhoshimatha+Temple+Thatichetlapalem+Visakhapatnam+Andhra+Pradesh",
  spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4/edit?gid=0#gid=0",
  spreadsheetId: "1m9DHbTnzCNYMx6Rby6v3e9WdKXi8KAeC_UEroQtMTH4",
  googleAppsScriptUrl:
    import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL?.trim() ||
    "https://script.google.com/macros/s/AKfycbzvn6HoPwpuHlj8N6njly81-tGKNzkfSZ3C2Hd6jwb6H-ZQNYHH7hhXIhs0-69pLd0l/exec",
  photoUrl: "/images/dad-photo.jpeg",
  whatsappMessages: {
    general: "Hello Satyanarayana garu, I am interested in exploring available properties in Visakhapatnam. Please share more details.",
    generalTe: "నమస్తే సత్యనారాయణ గారు, మీ వద్ద ఉన్న ప్రాపర్టీల వివరాలు తెలుసుకోవాలనుకుంటున్నాను. దయచేసి వివరాలు పంపగలరు.",
    openPlots: "Hello Satyanarayana garu, I am interested in Open Plots for investment. Please share available options and site locations.",
    residentialPlots: "Hello Satyanarayana garu, I am looking for Residential Plots to build a house in Visakhapatnam. Please share available plot details.",
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
