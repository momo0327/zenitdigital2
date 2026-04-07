'use client'
import React from 'react';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';

/**
 * Cookie consent banner that remembers user preference
 * Demonstrates useLocalStorage hook usage
 */
export const CookieConsent: React.FC = () => {
  const [hasConsented, setHasConsented] = useLocalStorage('cookie-consent', false);

  // Don't show if already consented
  if (hasConsented) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 md:p-6 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm md:text-base">
          <p>
            <span className="font-semibold">We use cookies</span> to enhance your browsing experience
            and analyze our traffic. By continuing to use this site, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setHasConsented(true)}
            className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
          >
            Accept All
          </button>
          <button
            onClick={() => setHasConsented(true)}
            className="px-6 py-2 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
