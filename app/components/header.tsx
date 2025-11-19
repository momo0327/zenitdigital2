'use client'
import React, { useEffect, useState } from 'react';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="px-2 md:px-12 lg:px-8 bg-white lg:py-20 py-17">
      <div className="bg-[#010A1E] rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] relative">
        {/* Title positioned at the very top */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-antonio lg:text-9xl 2xl:text-[12rem] font-bold text-center text-[#14AAFF] lg:mb-[-27px]">
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
          
          {/* Mobile subtitle and buttons */}
          <div className='mt-5 md:hidden'>
            <p className='text-lg leading-tight text-[#14AAFF]'>
              The way we work has changed, but 
              learning software hasnt. until now. 
            </p>
            <div className='gap-2 flex justify-center mt-6 mb-[-6px]'>
              <button className='bg-[#14AAFF] text-[#010A1E] py-2 px-6 rounded-full'>Explore</button>
              <button className='bg-[#010A1E] border-1 border-[#14AAFF] text-[#14AAFF] py-2 px-6 rounded-full'>Contact</button>
            </div>
          </div>
        </div>
                     
        {/* Image positioned below with fade up animation */}
        <div className="flex justify-center">
          <OptimizedImage
            src="/phoneHeader.png"
            alt="Zenit Digital mobile app development showcase with modern interface design"
            width={700}
            height={800}
            className="w-88 md:w-80 lg:w-96 xl:w-[430px] 2xl:w-[700px] h-auto object-contain transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: '400ms'
            }}
            priority
            quality={IMAGE_QUALITY.HIGH}
            enableBlur
          />
        </div>

        {/* Desktop subtitle and buttons - Absolutely positioned on the right */}
        <div 
          className="hidden md:block absolute right-12 lg:right-16 bottom-32 lg:bottom-52 max-w-xs transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transitionDelay: '600ms'
          }}
        >
          <p className='text-lg lg:text-xl leading-tight text-[#14AAFF] mb-3'>
            The way we work has changed, but learning software hasnt. until now.
          </p>
          <div className='flex gap-3'>
            <button className='bg-[#14AAFF] text-[#010A1E] py-3 px-7 text-sm rounded-full font-medium hover:bg-[#0FA0EF] transition-colors'>
              Explore
            </button>
            <button className='bg-transparent border-2 border-[#14AAFF] text-[#14AAFF] py-3 px-7 text-sm rounded-full font-medium hover:bg-[#14AAFF]/10 transition-colors'>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;