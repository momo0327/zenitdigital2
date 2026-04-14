'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';
import { MARKETING_COPY } from '@/app/constants/content';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-[#F5F5F5] lg:py-20 py-17">
      <div className="bg-[transparent] px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] relative">
        {/* Title positioned at the very top */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-antonio lg:text-9xl 2xl:text-[9rem] font-bold text-center lg:mb-[-10px] text-[#1E1F1F]">
            <div
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0ms'
              }}
            >
              WE DEVELOP
            </div>
            <div
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms'
              }}
            >
              DIGITAL IDEAS
            </div>
          </h1>
          
          {/* Mobile subtitle and buttons */}
          <div className='mt-5 md:hidden'>
            <p
              className='text-lg leading-tight text-[#000] transition-all duration-1000 ease-out'
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '400ms'
              }}
            >
              {MARKETING_COPY.tagline}
            </p>
            <div
              className='gap-2 flex justify-center mt-6 mb-8 transition-all duration-1000 ease-out'
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '600ms'
              }}
            >
              <Link href='/services' className='bg-[#1E1F1F] text-[#fff] py-2 px-6 rounded-full'>Explore</Link>
              <Link href='/ContactPage' className='bg-[#fff] border-1 border-[#1E1F1F] text-[#1E1F1F] py-2 px-6 rounded-full'>Contact</Link>
            </div>
          </div>
        </div>
                     
        {/* Image positioned below with fade up animation */}
        <div
          className="flex justify-center transition-all duration-1000 ease-out -mx-8 md:mx-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transitionDelay: '400ms'
          }}
        >
          <OptimizedImage
            src="/dinfarsa.png"
            alt="Zenit Digital mobile app development showcase with modern interface design"
            width={700}
            height={800}
            className="w-[400px] md:w-80 lg:w-[96] xl:w-[550px] 2xl:w-[600px] h-auto object-contain"
            priority
            quality={IMAGE_QUALITY.HIGH}
            enableBlur
          />
        </div>

        {/* Desktop subtitle and buttons - Absolutely positioned on the right */}
        <div
          className="hidden md:block absolute right-12 lg:right-16 2xl:right-24 bottom-32 lg:bottom-52 2xl:bottom-64 max-w-xs 2xl:max-w-md transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transitionDelay: '600ms'
          }}
        >
          <p className='text-lg lg:text-xl 2xl:text-2xl leading-tight text-[#000] mb-3 2xl:mb-5'>
            {MARKETING_COPY.tagline}
          </p>
          <div className='flex gap-3 2xl:gap-4'>
            <Link href='/services' className='bg-[#000] text-[#fff] py-3 px-7 2xl:py-4 2xl:px-10 text-sm 2xl:text-lg rounded-full font-bold hover:bg-[#0FA0EF] transition-colors'>
              Explore
            </Link>
            <Link href='/ContactPage' className='bg-transparent border-2 border-[#000] text-[#000] py-3 px-7 2xl:py-4 2xl:px-10 text-sm 2xl:text-lg rounded-full font-medium hover:bg-[#14AAFF]/10 transition-colors'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;