import React, { useState, useEffect } from 'react';
import { EnquiryFormData, PropertyCategory, PreferredCallTime } from '../../types/enquiry';
import { submitLeadEnquiry } from '../../services/leadService';
import { BUSINESS_CONFIG } from '../../config/business';
import { Send, CheckCircle2, AlertCircle, Loader2, PhoneCall, Clock, User, MapPin, Building } from 'lucide-react';
import './ContactForm.scss';

interface ContactFormProps {
  selectedCategory?: PropertyCategory;
}

const INITIAL_FORM_STATE: EnquiryFormData = {
  name: '',
  phone: '',
  preferredCallTime: '10 AM – 12 PM',
  address: '',
  propertyType: 'Open Plot',
};

const CALL_TIME_OPTIONS: PreferredCallTime[] = [
  '10 AM – 12 PM',
  '12 PM – 3 PM',
  '3 PM – 6 PM',
  '6 PM – 9 PM',
];

const PROPERTY_OPTIONS: PropertyCategory[] = [
  'Open Plot',
  'Residential Plot',
  'Independent House',
  'Not Sure',
];

export const ContactForm: React.FC<ContactFormProps> = ({ selectedCategory }) => {
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Update selected property type if parent passes one (e.g. from clicking a property card)
  useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({
        ...prev,
        propertyType: selectedCategory,
      }));
    }
  }, [selectedCategory]);

  const validatePhone = (phone: string): boolean => {
    // Strip spaces, dashes, parentheses and country code +91 or 91
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)) {
      return true;
    }
    if (cleaned.length === 12 && cleaned.startsWith('91') && /^[6-9]\d{9}$/.test(cleaned.slice(2))) {
      return true;
    }
    return false;
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name should be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your 10-digit mobile number';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number (e.g., 9876543210)';
    }

    if (!formData.preferredCallTime) {
      newErrors.preferredCallTime = 'Please select your preferred time to call';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const res = await submitLeadEnquiry(formData);
      setSubmitStatus('success');
      setStatusMessage(res.message);
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
    } catch (err: unknown) {
      setSubmitStatus('error');
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred while submitting. Please try again.';
      setStatusMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquire" className="section contact-form-section">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="contact-form-intro">
            <span className="badge">Direct Property Enquiry</span>
            <h2>Get in Touch with {BUSINESS_CONFIG.ownerName}</h2>
            <p>
              Fill out this quick form with your property requirement. {BUSINESS_CONFIG.ownerName} will
              review your details and call you directly at your preferred time.
            </p>

            <div className="contact-form-intro__perks">
              <div className="contact-form-intro__perk">
                <PhoneCall size={18} />
                <span>Direct 1-on-1 discussion with {BUSINESS_CONFIG.ownerName}</span>
              </div>
              <div className="contact-form-intro__perk">
                <Clock size={18} />
                <span>Call scheduled at your convenient time</span>
              </div>
              <div className="contact-form-intro__perk">
                <Building size={18} />
                <span>Honest location advice & site visit coordination</span>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {submitStatus === 'success' && (
              <div className="contact-form__alert contact-form__alert--success" role="alert">
                <CheckCircle2 size={24} className="contact-form__alert-icon" />
                <div>
                  <h4>Enquiry Received!</h4>
                  <p>{statusMessage}</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="contact-form__alert contact-form__alert--error" role="alert">
                <AlertCircle size={24} className="contact-form__alert-icon" />
                <div>
                  <h4>Submission Issue</h4>
                  <p>{statusMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {/* Name */}
              <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">
                  Your Full Name <span className="contact-form__required">*</span>
                </label>
                <div className="contact-form__input-wrapper">
                  <User size={18} className="contact-form__field-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="name"
                    required
                  />
                </div>
                {errors.name && <span className="contact-form__error-text">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="contact-form__group">
                <label htmlFor="phone" className="contact-form__label">
                  Mobile Number <span className="contact-form__required">*</span>
                </label>
                <div className="contact-form__input-wrapper">
                  <PhoneCall size={18} className="contact-form__field-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number (e.g. 9876543210)"
                    className={`contact-form__input ${errors.phone ? 'contact-form__input--error' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="tel"
                    required
                  />
                </div>
                {errors.phone && <span className="contact-form__error-text">{errors.phone}</span>}
              </div>

              {/* Property Category */}
              <div className="contact-form__group">
                <label htmlFor="propertyType" className="contact-form__label">
                  Interested Property Type <span className="contact-form__required">*</span>
                </label>
                <div className="contact-form__input-wrapper">
                  <Building size={18} className="contact-form__field-icon" />
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className={`contact-form__select ${errors.propertyType ? 'contact-form__input--error' : ''}`}
                    disabled={isSubmitting}
                  >
                    {PROPERTY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.propertyType && (
                  <span className="contact-form__error-text">{errors.propertyType}</span>
                )}
              </div>

              {/* Preferred Call Time */}
              <div className="contact-form__group">
                <label htmlFor="preferredCallTime" className="contact-form__label">
                  Preferred Time to Call <span className="contact-form__required">*</span>
                </label>
                <div className="contact-form__input-wrapper">
                  <Clock size={18} className="contact-form__field-icon" />
                  <select
                    id="preferredCallTime"
                    name="preferredCallTime"
                    value={formData.preferredCallTime}
                    onChange={handleChange}
                    className="contact-form__select"
                    disabled={isSubmitting}
                  >
                    {CALL_TIME_OPTIONS.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location / Address */}
              <div className="contact-form__group">
                <label htmlFor="address" className="contact-form__label">
                  Your Location / Preferred Area <span className="contact-form__optional">(Optional)</span>
                </label>
                <div className="contact-form__input-wrapper">
                  <MapPin size={18} className="contact-form__field-icon" />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. Madhurawada / Looking near Highway"
                    className="contact-form__input"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-full btn-lg contact-form__submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="spinner" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="contact-form__privacy-note">
                🔒 Your contact details are kept strictly private and used only for direct property consultation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
