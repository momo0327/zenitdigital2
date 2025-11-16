import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';

const GreenCTA = () => {
  return (
    <div className="px-6 md:px-12 lg:px-16 bg-white py-6 md:py-20 lg:py-24">
      <div className="rounded-2xl overflow-hidden min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] relative">
        {/* Green Section - Top Half */}
        <div className="bg-[#0A0D24] px-8 md:px-12 lg:px-16 py-20 md:py-24 lg:py-32 text-center h-1/2 flex items-center rounded-b-lg">
          <div className="max-w-4xl mx-auto w-full">
            {/* Main Title */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-antonio font-bold text-[#9AC2FF] mb-8">
              Learning like <br /> never before
            </h2>
            {/* Subtitle */}
            <p className="text-sm md:text-xl lg:text-xl text-[#9AC2FF] mb-10 md:mb-8 max-w-xl mx-auto">
              The way we work has changed, but learning <br />software hasnt. until now.
            </p>
            {/* CTA Buttons */}
            <div className="flex sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link href="/ContactPage">
              <button className="border-2 border-[#9AC2FF] text-[#9AC2FF] px-6 py-3 text-sm md:text-md font-medium rounded-full hover:bg-[#B4FFA8] hover:text-green-900 transition-all duration-200 transform hover:scale-105">
                Contact
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gray Section - Bottom Half */}
        <div className="bg-[#F4F4F6] px-8 md:px-12 lg:px-16 py-34 md:py-24 lg:py-64 text-center h-1/2 flex items-center relative">
          <div className="max-w-4xl mx-auto w-full">
            {/* Overlapping Image - Positioned in gray section with top overlapping green */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10">
              <OptimizedImage
                src="/h-1 2.png"
                alt="Modern learning platform interface - Interactive and engaging educational technology"
                width={800}
                height={900}
                className="w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] h-auto object-contain"
                quality={IMAGE_QUALITY.HIGH}
                enableBlur
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenCTA;