import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
     

        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-12 mb-16">
          {/* Logo and Clutch review */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light tracking-wider">UNIKO™</h3>
            </div>
            
            {/* Clutch review */}
            <div className="space-y-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                REVIEWED ON
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-gray-400">Clutch</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current text-white" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-500">9 REVIEWS</div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-6">MENU</h4>
            <nav className="space-y-4">
              <Link href="/" className="block text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/work" className="block text-white hover:text-gray-300 transition-colors">
                Work
              </Link>
              <Link href="/services" className="block text-white hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/faqs" className="block text-white hover:text-gray-300 transition-colors">
                FAQs
              </Link>
              <Link href="/contact" className="block text-white hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-6">SOCIALS</h4>
            <div className="space-y-4">
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                Instagram
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                Twitter
              </Link>
            </div>
          </div>

          {/* Business Enquiries */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-6">BUSINESS ENQUIRIES</h4>
            <div className="space-y-4">
              <Link href="mailto:hello@unikostudio.co" className="block text-white hover:text-gray-300 transition-colors">
                hello@unikostudio.co
              </Link>
              <Link href="tel:+17864143360" className="block text-white hover:text-gray-300 transition-colors">
                +1 (786) 414-3360
              </Link>
            </div>

            {/* Book a Call section */}
            <div className="mt-8 space-y-3">
              <div className="text-white font-medium">Book a Call</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                A 30-min discovery call to see how we can help.
              </p>
              
              {/* Profile section */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">KB</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Kristijan Binski</div>
                    <div className="text-xs text-gray-500">Co-Founder & Creative Director</div>
                  </div>
                </div>
                <button className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center space-y-4 xl:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500">
              <span>© 2025 UNIKO™</span>
              <span className="hidden xl:inline">|</span>
              <span>Miami</span>
              <span className="hidden xl:inline">|</span>
              <span>London</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;