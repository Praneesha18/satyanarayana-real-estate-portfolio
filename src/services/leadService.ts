import { EnquiryFormData, LeadSubmissionPayload, LeadSubmissionResponse } from '../types/enquiry';
import { BUSINESS_CONFIG } from '../config/business';

/**
 * Service to handle customer lead submissions to Google Sheets via Google Apps Script Web App
 */

const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL?.trim() ||
  BUSINESS_CONFIG.googleAppsScriptUrl;

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

  // If no URL is set at all
  if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
    console.info('ℹ️ [LeadService Demo Mode] Google Apps Script URL not set. Payload:', payload);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Thank you! Your enquiry has been received. Satyanarayana will contact you soon.',
      isSimulated: true,
    };
  }

  try {
    // Send using URL-encoded form data which Google Apps Script parses natively in e.parameter without CORS issues
    const params = new URLSearchParams();
    params.append('submittedAt', payload.submittedAt);
    params.append('name', payload.name);
    params.append('phone', payload.phone);
    params.append('preferredCallTime', payload.preferredCallTime);
    params.append('address', payload.address || 'Not specified');
    params.append('propertyType', payload.propertyType);
    params.append('status', payload.status);
    params.append('sourceUrl', payload.sourceUrl || '');

    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: params.toString(),
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
