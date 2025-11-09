'use client'
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="px-2 md:px-12 lg:px-8 bg-white lg:py-20 py-17">
      <div className="bg-[#010A1E] rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        {/* Title positioned at the very top */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-antonio lg:text-9xl 2xl:text-[12rem] font-bold text-center wei text-[#14AAFF] mb-[-15px] lg:mb-[-30px]">
            <div 
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0ms'
              }}
            >
              We Develop
            </div>
            <div 
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms'
              }}
            >
              Your Dreams.
            </div>
          </h1>
        </div>
                     
        {/* Image positioned below with fade up animation */}
        <div className="flex justify-center">
          <img 
            src="/phoneHeader.png" 
            alt="Phone Header"
            className="w-88 md:w-80 lg:w-96 xl:w-[450px] 2xl:w-[700px] h-auto object-contain transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: '400ms'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;