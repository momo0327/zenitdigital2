'use client'
import React, { useState, useRef, useCallback } from 'react';

const SelectedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const workItems = [
    {
      title: "Polestar increased its users by 75%",
      subtitle: "Polestar",
      image: "/polestar 2.png",
      bgColor: "bg-gray-900"
    },
    {
      title: "Polestar increased its users by 75%",
      subtitle: "anyb o",
      image: "/superside 3.png", 
      bgColor: "bg-gray-900"
    },
    {
      title: "Another project title",
      subtitle: "Client Name",
      image: "/api/placeholder/400/300",
      bgColor: "bg-gray-900"
    },
    {
      title: "Fourth project showcase",
      subtitle: "Brand Name",
      image: "/api/placeholder/400/300",
      bgColor: "bg-gray-900"
    }
  ];

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

  const scrollToItem = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 320; // width of card + gap
      const scrollPosition = index * scrollAmount;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="bg-white py-16 md:py-20 lg:py-36 2xl:py-48 relative">
      <div className="md:px-12 lg:px-16 2xl:px-24">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 2xl:gap-12 max-w-7xl 2xl:max-w-[2000px] mx-auto">
          {/* Left Side - Title and Controls (Fixed on scroll) */}
          <div className="col-span-4 lg:col-span-3 sticky top-32 2xl:top-40 self-start z-20 bg-white">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-antonio font-bold text-black leading-tight mb-4 2xl:mb-6">
              SELECTED<br />
              WORK
            </h2>
            <p className="text-gray-600 text-lg 2xl:text-2xl mb-8 2xl:mb-12 max-w-xs 2xl:max-w-md">
              The way we work has changed, but learning software hasnt. until now.
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4 2xl:gap-6">
              <button
                onClick={scrollToPrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous work"
              >
                <svg width="16" height="16" className="2xl:w-6 2xl:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={scrollToNext}
                disabled={currentIndex === workItems.length - 1}
                className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next work"
              >
                <svg width="16" height="16" className="2xl:w-6 2xl:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Scrolling Images with Overflow Effect */}
          <div className="col-span-8 lg:col-span-9 relative -mr-12 lg:-mr-16 2xl:-mr-24">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 2xl:gap-8 overflow-x-auto scrollbar-hide pb-4 2xl:pb-6 pr-12 lg:pr-16 2xl:pr-24"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {workItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} rounded-lg 2xl:rounded-2xl flex-shrink-0 w-80 2xl:w-[480px] h-[500px] 2xl:h-[680px] relative overflow-hidden`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  <div className="absolute top-6 2xl:top-10 left-6 2xl:left-10 text-white">
                    <h3 className="text-lg 2xl:text-2xl font-semibold mb-1 max-w-64 2xl:max-w-96">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-6 2xl:bottom-10 left-6 2xl:left-10 text-white">
                    <p className="text-2xl 2xl:text-4xl font-antonio font-bold">
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
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
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