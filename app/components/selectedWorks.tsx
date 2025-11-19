'use client'
import React, { useState, useRef, useCallback } from 'react';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';
import { PORTFOLIO_ITEMS } from '../constants/content';

const SelectedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use portfolio items from constants
  const workItems = PORTFOLIO_ITEMS;

  const scrollToNext = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 320; // width of card + gap
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      if (currentIndex < workItems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  }, [currentIndex, workItems.length]);

  const scrollToPrev = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 320; // width of card + gap
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  }, [currentIndex]);

  // Removed unused scrollToItem function
  // If needed in future, can be restored for pagination dots or direct navigation

  return (
    <div className="bg-white py-16 md:py-20 lg:py-36 relative overflow-hidden">
      <div className=" md:px-12 lg:px-16">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-start justify-between max-w-7xl mx-auto">
          {/* Left Side - Title and Controls */}
          <div className="flex-shrink-0 mr-8  lg:mr-12 relative z-10 bg-white">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-antonio font-bold text-black leading-tight mb-4">
              SELECTED<br />
              WORK
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xs">
              The way we work has changed, but learning software hasnt. until now.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4 ">
              <button
                onClick={scrollToPrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous work"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={scrollToNext}
                disabled={currentIndex === workItems.length - 1}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next work"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Scrolling Images */}
          <div className="flex-1 relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {workItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} rounded-lg flex-shrink-0 w-80 h-[500px] relative overflow-hidden`}
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={500}
                    className="w-full h-full object-cover"
                    quality={IMAGE_QUALITY.HIGH}
                    enableBlur
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  <div className="absolute top-6 left-6 text-white">
                    <h3 className="text-lg font-semibold mb-1 max-w-64">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-2xl font-antonio font-bold">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden py-6">
          {/* Title at top */}
          <div className="mb-8 px-5 text-left">
            <h2 className="text-4xl font-antonio font-bold text-black leading-tight mb-4">
              SELECTED WORK
            </h2>
            <p className="text-gray-600 text-base">
              The way we work has changed, but learning software hasnt. until now.
            </p>
          </div>

          {/* Scrolling Images */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide mb-8"
          >
            <div className="flex gap-4 px-5 pb-4">
              {workItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} rounded-lg flex-shrink-0 w-72 h-[420px] relative overflow-hidden`}
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    width={288}
                    height={420}
                    className="w-full h-full object-cover"
                    quality={IMAGE_QUALITY.HIGH}
                    enableBlur
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  <div className="absolute top-4 left-4 text-white">
                    <h3 className="text-base font-semibold mb-1 max-w-56">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xl font-antonio font-bold">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons below images on mobile */}
          <div className="flex px-5 gap-4 justify-end">
            <button
              onClick={scrollToPrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous work"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollToNext}
              disabled={currentIndex === workItems.length - 1}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Next work"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SelectedWork;