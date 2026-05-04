import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '../constants/content';
import { SOCIAL_LINKS } from '../constants/navigation';

interface FooterProps {
  bgColor?: string;
  textColor?: string;
}

const Footer = ({ bgColor = '#000000', textColor }: FooterProps) => {
  // Auto-detect text color based on background if not provided
  const isLightBackground = bgColor !== '#000000' && bgColor !== 'black';
  const finalTextColor = textColor || (isLightBackground ? '#000000' : '#ffffff');
  const mutedTextColor = isLightBackground ? '#6B7280' : '#9CA3AF';
  const lighterTextColor = isLightBackground ? '#4B5563' : '#D1D5DB';
  const borderColor = isLightBackground ? '#E5E7EB' : '#1F2937';

  return (
    <footer className="py-16 px-8" style={{ backgroundColor: bgColor, color: finalTextColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
     

        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Logo and Wordmark */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3" style={{ color: finalTextColor }}>
              <Image
                src="/zenialogo.png"
                alt="Zenia Logo"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain invert"
                unoptimized
              />
              <span className="text-3xl lg:text-4xl font-shentox font-normal tracking-wide">
                ZENIA
              </span>
            </Link>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-base uppercase tracking-wider mb-6" style={{ color: mutedTextColor }}>MENU</h4>
            <nav className="space-y-4">
              <Link href="/" className="block text-lg transition-colors hover:opacity-70" style={{ color: finalTextColor }}>
                Home
              </Link>
              <Link href="/services" className="block text-lg transition-colors hover:opacity-70" style={{ color: finalTextColor }}>
                Services
              </Link>
              <Link href="/faqs" className="block text-lg transition-colors hover:opacity-70" style={{ color: finalTextColor }}>
                FAQ
              </Link>
              <Link href="/ContactPage" className="block text-lg transition-colors hover:opacity-70" style={{ color: finalTextColor }}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-base uppercase tracking-wider mb-6" style={{ color: mutedTextColor }}>SOCIALS</h4>
            <div className="space-y-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="block text-lg transition-colors hover:opacity-70"
                  style={{ color: finalTextColor }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Business Enquiries */}
          <div>
            <h4 className="text-base uppercase tracking-wider mb-6" style={{ color: mutedTextColor }}>BUSINESS ENQUIRIES</h4>
            <div className="space-y-4">
              <Link href={`mailto:${COMPANY.email}`} className="block text-lg transition-colors hover:opacity-70" style={{ color: finalTextColor }}>
                {COMPANY.email}
              </Link>
              {/* Phone hidden until COMPANY.phone is replaced with a real number
              <Link href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="block text-lg transition-colors hover:opacity-70" style={{ color: finalTextColor }}>
                {COMPANY.phone}
              </Link>
              */}
              <div className="text-base leading-relaxed pt-2" style={{ color: mutedTextColor }}>
                {COMPANY.address.street}<br />
                {COMPANY.address.postalCode} {COMPANY.address.city}<br />
                {COMPANY.address.country}
              </div>
            </div>

            {/* Book a Call section */}
          
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t pt-8" style={{ borderColor }}>
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center space-y-4 xl:space-y-0">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base" style={{ color: lighterTextColor }}>
              <span>© {new Date().getFullYear()} {COMPANY.name}</span>
              <span className="hidden xl:inline">|</span>
              <span>Sweden</span>
              <span className="hidden xl:inline">|</span>
              <span>International</span>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex space-x-6 text-base" style={{ color: mutedTextColor }}>
                <Link href="/privacy" className="hover:opacity-70 transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:opacity-70 transition-colors">Terms</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;