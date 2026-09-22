import { EnquiryFormData, LeadSubmissionPayload, LeadSubmissionResponse } from '../types/enquiry';

/**
 * Service to handle customer lead submissions to Google Sheets via Google Apps Script Web App
 */

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL?.trim();

export async function submitLeadEnquiry(formData: EnquiryFormData): Promise<LeadSubmissionResponse> {
  const payload: LeadSubmissionPayload = {
    ...formData,
    submittedAt: new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    sourceUrl: window.location.href,
    status: 'New',
  };

  // If no Google Apps Script Web App URL is configured yet, simulate successful save for development
  if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
    console.info(
      'ℹ️ [LeadService Demo Mode] Google Apps Script URL not set. Payload logged below:',
      payload
    );
    // Simulate network delay for authentic UX
    await new Promise((resolve) => setTimeout(resolve, 900));
    return {
      success: true,
      message: 'Thank you! Your enquiry has been received. Satyanarayana will contact you soon.',
      isSimulated: true,
    };
  }

  try {
    // Submit using standard JSON POST
    // Google Apps Script requires text/plain or no-cors to avoid CORS preflight issues
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      message: 'Thank you! Your enquiry has been received. Satyanarayana will contact you soon.',
      isSimulated: false,
    };
  } catch (error) {
    console.error('Failed to submit enquiry to Google Sheets:', error);
    throw new Error(
      'Unable to submit your enquiry at the moment. Please call or WhatsApp us directly.'
    );
  }
}
