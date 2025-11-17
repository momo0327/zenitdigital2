'use client'
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Implement your form submission logic here
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // For now, simulate submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);
      setSubmitStatus('success');

      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mb-16">
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-500/20 border border-green-500 text-green-900 px-6 py-4 rounded-2xl">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-500/20 border border-red-500 text-red-900 px-6 py-4 rounded-2xl">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            disabled={isSubmitting}
            className="w-full bg-white/90 border-2 border-[#0A0D24]/20 text-[#0A0D24] placeholder-[#0A0D24]/50 py-3 px-4 focus:outline-none focus:border-[#0A0D24] focus:ring-2 focus:ring-[#0A0D24]/20 transition-all rounded-2xl disabled:opacity-50"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            disabled={isSubmitting}
            className="w-full bg-white/90 border-2 border-[#0A0D24]/20 text-[#0A0D24] placeholder-[#0A0D24]/50 py-3 px-4 focus:outline-none focus:border-[#0A0D24] focus:ring-2 focus:ring-[#0A0D24]/20 transition-all rounded-2xl disabled:opacity-50"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            disabled={isSubmitting}
            className="w-full bg-white/90 border-2 border-[#0A0D24]/20 text-[#0A0D24] placeholder-[#0A0D24]/50 py-3 px-4 focus:outline-none focus:border-[#0A0D24] focus:ring-2 focus:ring-[#0A0D24]/20 transition-all rounded-2xl disabled:opacity-50"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            disabled={isSubmitting}
            className="w-full bg-white/90 border-2 border-[#0A0D24]/20 text-[#0A0D24] placeholder-[#0A0D24]/50 py-3 px-4 focus:outline-none focus:border-[#0A0D24] focus:ring-2 focus:ring-[#0A0D24]/20 transition-all rounded-2xl disabled:opacity-50"
          />
        </div>
      </div>

      {/* Company Name */}
      <div>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name (Optional)"
          disabled={isSubmitting}
          className="w-full bg-white/90 border-2 border-[#0A0D24]/20 text-[#0A0D24] placeholder-[#0A0D24]/50 py-3 px-4 focus:outline-none focus:border-[#0A0D24] focus:ring-2 focus:ring-[#0A0D24]/20 transition-all rounded-2xl disabled:opacity-50"
        />
      </div>

      {/* Service Selection */}
      <div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full bg-white/90 border-2 border-[#0A0D24]/20 text-[#0A0D24] py-3 px-4 focus:outline-none focus:border-[#0A0D24] focus:ring-2 focus:ring-[#0A0D24]/20 transition-all rounded-2xl appearance-none cursor-pointer disabled:opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A0D24' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            backgroundSize: '1.5em 1.5em',
            paddingRight: '3rem'
          }}
        >
          <option value="" disabled>Select a Service</option>
          <option value="web-design">Web Design</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-development">Mobile Development</option>
          <option value="fullstack-development">Fullstack Development</option>
          <option value="branding">Branding</option>
          <option value="seo">SEO</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project"
          required
          rows={5}
          disabled={isSubmitting}
          className="w-full bg-white/90 border-2 border-[#0A0D24]/20 text-[#0A0D24] placeholder-[#0A0D24]/50 py-3 px-4 focus:outline-none focus:border-[#0A0D24] focus:ring-2 focus:ring-[#0A0D24]/20 transition-all rounded-2xl resize-none disabled:opacity-50"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-[#0A0D24] text-white font-semibold text-lg rounded-2xl hover:bg-[#0A0D24]/90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
