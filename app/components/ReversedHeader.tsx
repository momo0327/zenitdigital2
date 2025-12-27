import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';

const ReversedHeader = () => {
  return (
    <div className="px-2 md:px-12 lg:px-4 2xl:px-8 bg-white py-6 2xl:py-10 flex-1">
      <div className="bg-[#120128] h-[700px] md:h-[600px] lg:h-[442px] 2xl:h-[600px] rounded-xl px-6 md:px-10 2xl:px-16 py-12 md:py-12 2xl:py-16 w-full flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 2xl:gap-12">
          {/* Left side - Phone Image */}
          <div className="flex-1 flex justify-center">
            <OptimizedImage
              src="/h-3 2.png"
              alt="Mobile app development - iOS and Android native applications with beautiful UI"
              width={256}
              height={300}
              className="w-52 md:w-56 lg:w-64 2xl:w-[350px] h-auto object-contain transform -rotate-6"
              quality={IMAGE_QUALITY.HIGH}
              enableBlur
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-left">
            <h2 className="text-5xl md:text-5xl 2xl:text-7xl font-antonio font-bold text-[#BEA1FC] leading-tight mb-6 2xl:mb-8">
              Mobile App Development
            </h2>
            <p className="text-base md:text-lg 2xl:text-2xl text-[#BEA1FC] mb-6 2xl:mb-10 leading-relaxed">
              The way we work has changed, but learning software hasnt.
            </p>

            <div className="flex gap-4 2xl:gap-6">
            <Link href="/services">
              <button className="bg-[#BEA1FC] text-[#120128] px-6 py-3 2xl:px-10 2xl:py-4 text-sm 2xl:text-lg rounded-full font-semibold hover:bg-purple-400 transition-colors duration-200">
                Explore
              </button>
                </Link>
              <Link href="/ContactPage">
              <button className="border border-[#BEA1FC] text-[#BEA1FC] px-6 py-3 2xl:px-10 2xl:py-4 text-sm 2xl:text-lg rounded-full font-semibold hover:bg-[#BEA1FC] hover:text-[#120128] transition-all duration-200">
                Contact
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReversedHeader;