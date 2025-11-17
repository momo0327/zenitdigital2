import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';

const ReversedHeader = () => {
  return (
    <div className="px-3 bg-white py-12">
      <div className="bg-[#120128] min-h-[400px] rounded-xl px-10 py-12 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Phone Image */}
          <div className="flex-1 flex justify-center">
            <OptimizedImage
              src="/h-3 2.png"
              alt="Mobile app development - iOS and Android native applications with beautiful UI"
              width={256}
              height={300}
              className="w-52 md:w-56 lg:w-64 h-auto object-contain transform -rotate-6"
              quality={IMAGE_QUALITY.HIGH}
              enableBlur
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-antonio font-bold text-[#BEA1FC] leading-tight mb-6">
              Mobile App Development
            </h2>
            <p className="text-base md:text-lg text-[#BEA1FC] mb-6 leading-relaxed">
              The way we work has changed, but learning software hasnt.
            </p>
           
            <div className="flex gap-4">
            <Link href="/MobileDev">
              <button className="bg-[#BEA1FC] text-[#120128] px-6 py-3 text-sm rounded-full font-semibold hover:bg-purple-400 transition-colors duration-200">
                Demo
              </button>
                </Link>
              <Link href="/ContactPage">
              <button className="border border-[#BEA1FC] text-[#BEA1FC] px-6 py-3 text-sm rounded-full font-semibold hover:bg-[#BEA1FC] hover:text-[#120128] transition-all duration-200">
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