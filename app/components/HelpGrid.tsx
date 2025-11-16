import React from 'react';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';

const HelpGrid = () => {
  return (
    <div className='w-full py-36 bg-white'>
    <div className="max-w-6xl  mx-auto p-6 space-y-6">
      {/* Main Featured Section */}
      <div className="bg-[#F6F5F8] rounded-2xl p-8 text-center ">
        <h1 className="text-5xl font-antonio font-bold text-gray-900 mb-4">
          Prototype & MVP
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The way we work has changed, but learning software hasn&apos;t, until now.
        </p>
        
        {/* Image Container */}
        <div className="relative max-w-2xl mx-auto h-100 bg-gray-100 rounded-xl overflow-hidden">
          <OptimizedImage
            src="/handEffect.png"
            alt="Prototype and MVP development - Rapid iteration and user testing for product validation"
            width={800}
            height={400}
            className="w-full h-full object-cover"
            quality={IMAGE_QUALITY.HIGH}
            enableBlur
          />
        </div>
      </div>

      {/* Bottom Grid - Two Equal Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Digital Partner Card */}
        <div className="bg-[#0A0D24] rounded-2xl p-8  text-center">
          <h2 className="text-3xl font-antonio font-bold text-[#9AC2FF]  mb-4">Digital Partner</h2>
          <p className="text-[#9AC2FF] mb-8 mx-auto max-w-sm">
            The way we work has changed, but learning software hasn&apos;t, until now.
          </p>
          
          {/* Image Container */}
          <div className="h-62 rounded-xl overflow-hidden">
            <OptimizedImage
              src="/h-10 2.png"
              alt="Digital partner services - Comprehensive technology partnership and consulting solutions"
              width={400}
              height={300}
              className="w-full h-full object-cover"
              quality={IMAGE_QUALITY.MEDIUM}
              enableBlur
            />
          </div>
        </div>

        {/* Right Digital Partner Card */}
        <div className="bg-[#9AC2FF] rounded-xl p-8  text-center">
          <h2 className="text-3xl font-bold font-antonio text-gray-900 mb-4">Scale & Maintain</h2>
          <p className="text-gray-600 mb-8 mx-auto max-w-sm">
            The way we work has changed, but learning software hasn&apos;t, until now.
          </p>
          
          {/* Image Container */}
          <div className="h-64 w-auto rounded-xl overflow-hidden">
            <OptimizedImage
              src="/laptops.png"
              alt="Scale and maintain services - Enterprise-grade infrastructure and continuous support"
              width={400}
              height={256}
              className="w-full h-full object-cover"
              quality={IMAGE_QUALITY.MEDIUM}
              enableBlur
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HelpGrid;