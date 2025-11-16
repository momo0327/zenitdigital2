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
          <h1 className="text-6xl md:text-8xl font-antonio lg:text-9xl 2xl:text-[12rem] font-bold text-center text-[#14AAFF]  lg:mb-[-30px]">
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
          <div className='mt-5 md:hidden'>
            <p className=' text-lg leading-tight text-[#14AAFF]'>The  way we work has changed, but 
            learning software hasnt. until now. 
            </p>
                <div className='gap-2 flex justify-center mt-6 mb-[-6px]'>
                    <button className='bg-[#14AAFF] text-[#010A1E] py-2 px-6 rounded-full'> Explore </button>
                    <button className='bg-[#010A1E] border-1 border-[#14AAFF] text-[#14AAFF] py-2 px-6 rounded-full '> Explore </button>
                </div>
          </div>
   
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