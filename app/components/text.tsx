'use client'

import React from 'react';
import ScrollTextReveal from './ScrollTextReveal';

const BigText = () => {
  return (
    <div className="bg-white flex items-center flex-col justify-center py-12 md:py-16 2xl:py-24 px-4 2xl:px-8">
      {/* Main heading section */}
      <div className="max-w-7xl 2xl:max-w-[2400px] mx-auto w-full flex justify-center lg:justify-end 2xl:justify-end 2xl:pl-16">
        <div className="text-left lg:text-left max-w-2xl lg:max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-medium text-black leading-tight mb-3 2xl:mb-6">
            <ScrollTextReveal
              highlightColor="#000000"
              dimColor="#D1D5DB"
              start="top 55%"
              end="top 20%"
              enableHaptic={true}
              hapticIntensity={5}
            >
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>We</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>are</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>award-winning</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>strategic</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>design</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>studios</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>focusing</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>on</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>building</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>bespoke</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>websites</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>and</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>brand</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>identities</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>that</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>instill</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>trust,</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>make</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>an</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>impact,</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>and</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>drive</span>{' '}
              <span className="reveal-word" style={{ color: '#D1D5DB' }}>growth.</span>
            </ScrollTextReveal>
          </h1>
                     
          <div className="mt-8 lg:mt-12 2xl:mt-16">
            <button className="inline-flex items-center text-base lg:text-lg 2xl:text-xl font-medium text-black hover:text-gray-700 transition-colors border-b border-black hover:border-gray-700 pb-1 2xl:pb-2">
              Let&apos;s Talk
              <svg className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigText;