/**
 * Types and interfaces for customer leads and enquiries
 */

export type PropertyCategory = 
  | 'Open Plot'
  | 'Residential Plot'
  | 'Independent House'
  | 'Not Sure';

export type PreferredCallTime = 
  | '10 AM – 12 PM'
  | '12 PM – 3 PM'
  | '3 PM – 6 PM'
  | '6 PM – 9 PM';

export interface EnquiryFormData {
  name: string;
  phone: string;
  preferredCallTime: PreferredCallTime;
  address: string;
  propertyType: PropertyCategory;
}

export interface LeadSubmissionPayload extends EnquiryFormData {
  submittedAt: string;
  sourceUrl?: string;
  status: 'New';
}

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
  isSimulated?: boolean;
}
