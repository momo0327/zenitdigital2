import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';

const GreenCTA = () => {
  return (
    <div className="px-6 md:px-12 lg:px-16 2xl:px-24 bg-white py-6 md:py-20 lg:py-24 2xl:py-32">
      <div className="rounded-2xl overflow-hidden min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] 2xl:min-h-[1200px] relative">
        {/* Green Section - Top Half */}
        <div className="bg-[#0A0D24] px-8 md:px-12 lg:px-16 2xl:px-24 py-20 md:py-24 lg:py-32 2xl:py-40 text-center h-1/2 flex items-center rounded-b-lg">
          <div className="max-w-4xl 2xl:max-w-6xl mx-auto w-full">
            {/* Main Title */}
            <p className='font-antonio text-lg 2xl:text-2xl'>COME ON</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-antonio font-bold text-[#9AC2FF] mb-8 2xl:mb-12">
              LETS TURN YOUR <br /> IDEA  INTO REALITY
            </h2>
            {/* Subtitle */}
            {/* CTA Buttons */}
            <div className="flex sm:flex-row gap-4 md:gap-6 2xl:gap-8 justify-center items-center">
              <Link href="/ContactPage">
              <button className=" bg-white font-antonio font-bold text-[#0A0D24] px-6 py-3 2xl:px-10 2xl:py-4 text-sm md:text-lg 2xl:text-2xl rounded-full hover:bg-[#B4FFA8] hover:text-green-900 transition-all duration-200 transform hover:scale-105">
                LETS TALK
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gray Section - Bottom Half */}
        <div className="bg-[#F4F4F6] px-8 md:px-12 lg:px-16 2xl:px-24 py-34 md:py-24 lg:py-64 2xl:py-80 text-center h-1/2 flex items-center relative">
          <div className="max-w-4xl 2xl:max-w-6xl mx-auto w-full">
            {/* Overlapping Image - Positioned in gray section with top overlapping green */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10">
              <OptimizedImage
                src="/h-1 2.png"
                alt="Modern learning platform interface - Interactive and engaging educational technology"
                width={800}
                height={900}
                className="w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px] h-auto object-contain"
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