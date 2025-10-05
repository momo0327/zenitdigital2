'use client'
import React from 'react';

const CTA = () => {
  return (
    <div className="px-5 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-[#0A0D24] rounded-lg px-8 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24 text-center relative overflow-hidden">
          {/* Top Left Hand Image */}
          <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-60 transform -translate-x-6 -translate-y-6">
            <img 
              src="/api/placeholder/200/200" 
              alt="Hand reaching down" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bottom Right Hand Image */}
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-60 transform translate-x-6 translate-y-6">
            <img 
              src="/handR.png" 
              alt="Hand reaching up" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-antonio font-bold text-[#9AC2FF] leading-tight mb-6">
              <span className="">
                Together we
              </span>
              <br />
              reach futher
            </h2>
            
            <p className="text-[#9AC2FF] text-md md:text-lg mb-8 max-w-sm mx-auto">
              The way we work has changed, but learning software hasnt. until now.
            </p>
            
            <button className="bg-[#9AC2FF] text-[#0A0D24] font-semibold px-6 py-2 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact
            </button>
          </div>

          {/* Decorative Elements */}
          
        </div>
      </div>
    </div>
  );
};

export default CTA;