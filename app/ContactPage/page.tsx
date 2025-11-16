import React from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#9AC2FF] px-4 sm:px-6 lg:px-8 py-24 md:py-32 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Big Title - Landing Page Style */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-7xl sm:text-8xl md:text-8xl xl:text-[9rem] font-antonio font-bold text-[#0A0D24] leading-none mb-8">
              LETS MAKE
              <br />
              IT HAPPEN
            </h1>
            <p className="text-[#0A0D24] text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              The way we work has changed, but <br /> learning software hasn&apos;t. until now.
            </p>
          </div>

          {/* Contact Form - Smaller and Centered */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
  );
}
