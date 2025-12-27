import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';
const Header = () => {
  return (
    <div className="px-2 md:px-12 lg:px-4 2xl:px-8 bg-white py-6 2xl:py-10 flex-1">
      <div className="bg-[#240000] h-[700px] md:h-[600px] lg:h-[442px] 2xl:h-[600px] rounded-xl px-6 md:px-10 2xl:px-16 py-12 md:py-12 2xl:py-16 w-full flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 2xl:gap-12 w-full">
          {/* Left side - Content */}
          <div className="flex-1 text-left">
            <h2 className="text-5xl md:text-5xl 2xl:text-7xl font-antonio font-bold text-[#FF5147] leading-tight mb-6 2xl:mb-8">
              Web App Development
            </h2>
            <p className="text-base md:text-lg 2xl:text-2xl text-[#FF5147] mb-6 2xl:mb-10 leading-relaxed">
              The way we work has changed, but learning software hasnt.
            </p>
            <div className="flex gap-4 2xl:gap-6">
            <Link href="/services">
              <button className="bg-[#FF5147] text-[#240000] px-6 py-3 2xl:px-10 2xl:py-4 text-sm 2xl:text-lg rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200">
                Explore
              </button>
              </Link>
              <Link href="/ContactPage">
              <button className="border border-[#FF5147] text-[#FF5147] px-6 py-3 2xl:px-10 2xl:py-4 text-sm 2xl:text-lg rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200">
                Contact
              </button>
              </Link>
            </div>
          </div>

          {/* Right side - Phone Image */}
          <div className="flex-1 flex justify-center">
            <OptimizedImage
              src="/ipadred.png"
              alt="Web development services - Responsive website design and modern web applications"
              width={584}
              height={400}
              className="w-80 md:w-92 lg:w-96 2xl:w-[500px] h-auto object-contain transform"
              quality={IMAGE_QUALITY.HIGH}
              enableBlur
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;