'use client'
import React from 'react';
import { useDragScroll } from '@/app/hooks/useDragScroll';

const FeaturesGrid = () => {
  const { scrollContainerRef, handlers } = useDragScroll({ scrollSpeed: 2 });

  const features = [
    {
      number: "01",
      title: "Research",
      description: "The way we work has changed, but learning software hasnt. until now.",
      bgColor: "bg-[#FF90C0]",
      textColor: "text-[#40001C]"
    },
    {
      number: "02",
      title: "Design", 
      description: "The way we work has changed, but learning software hasnt. until now.",
      bgColor: "bg-[#40001C]",
      textColor: "text-[#FF90C0]"
    },
    {
      number: "03",
      title: "Development",
      description: "The way we work has changed, but learning software hasnt. until now.",
      bgColor: "bg-[#210316]", 
      textColor: "text-[#FBCBEA]"
    },
    {
      number: "04",
      title: "Release",
      description: "The way we work has changed, but learning software hasnt. until now.",
      bgColor: "bg-[#FBCBEA]",
      textColor: "text-[#210316]"
    }
  ];

  return (
    <div className="bg-white py-1 md:py-20 lg:py-24 2xl:py-32">
      <div className="w-full">
        {/* Desktop Layout */}
        <div className="hidden md:block px-5 md:px-12 lg:px-16 2xl:px-24">
          <div className="max-w-7xl 2xl:max-w-[2000px] mx-auto">
            <div className="md:grid md:grid-cols-3 gap-6 2xl:gap-10">
              {/* Strategic Approach Text - Left Column */}
              <div className="flex flex-col justify-start">
                <h2 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-antonio font-bold text-black leading-tight">
                  STRATEGIC<br />
                  APPROACH
                </h2>
                <p className="text-gray-600 mt-4 2xl:mt-6 text-lg 2xl:text-2xl">
                  The way we work has changed,
                  software hasnt. until now.
                </p>
              </div>

              {/* Features Grid - Right 2 columns */}
              <div className="md:col-span-2 grid grid-cols-2 gap-6 2xl:gap-10">
                {/* Research - 01 */}
                <div className={`${features[0].bgColor} ${features[0].textColor} rounded-lg 2xl:rounded-2xl p-8 2xl:p-12 h-64 2xl:h-80 flex flex-col justify-between`}>
                  <div>
                    <div className="text-4xl lg:text-5xl 2xl:text-7xl font-antonio font-bold mb-4 2xl:mb-6 ">
                      {features[0].number}
                    </div>
                    <h3 className="text-2xl lg:text-3xl 2xl:text-5xl font-antonio font-bold mb-4 2xl:mb-6">
                      {features[0].title}
                    </h3>
                    <p className="text-sm 2xl:text-lg opacity-80 leading-relaxed">
                      {features[0].description}
                    </p>
                  </div>
                </div>

                {/* Design - 02 */}
                <div className={`${features[1].bgColor} ${features[1].textColor} rounded-lg 2xl:rounded-2xl p-8 2xl:p-12 h-64 2xl:h-80 flex flex-col justify-between`}>
                  <div>
                    <div className="text-4xl lg:text-5xl 2xl:text-7xl font-antonio font-bold mb-4 2xl:mb-6 ">
                      {features[1].number}
                    </div>
                    <h3 className="text-2xl lg:text-3xl 2xl:text-5xl font-antonio font-bold mb-4 2xl:mb-6">
                      {features[1].title}
                    </h3>
                    <p className="text-sm 2xl:text-lg opacity-80 leading-relaxed">
                      {features[1].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Development - 03 (spans full width below) */}
              <div className={`${features[2].bgColor} ${features[2].textColor} rounded-lg 2xl:rounded-2xl p-8 2xl:p-12 h-64 2xl:h-80 flex flex-col justify-between col-span-2`}>
                <div>
                  <div className="text-4xl lg:text-5xl 2xl:text-7xl font-antonio font-bold mb-4 2xl:mb-6 ">
                    {features[2].number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl 2xl:text-5xl font-antonio font-bold mb-4 2xl:mb-6">
                    {features[2].title}
                  </h3>
                  <p className="text-sm 2xl:text-lg opacity-80 leading-relaxed">
                    {features[2].description}
                  </p>
                </div>
              </div>

              {/* Release - 04 */}
              <div className={`${features[3].bgColor} ${features[3].textColor} rounded-lg 2xl:rounded-2xl p-8 2xl:p-12 h-64 2xl:h-80 flex flex-col justify-between`}>
                <div>
                  <div className="text-4xl lg:text-5xl 2xl:text-7xl font-antonio font-bold mb-4 2xl:mb-6 ">
                    {features[3].number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl 2xl:text-5xl font-antonio font-bold mb-4 2xl:mb-6">
                    {features[3].title}
                  </h3>
                  <p className="text-sm 2xl:text-lg opacity-80 leading-relaxed">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Strategic Approach Text - Above on mobile */}
          <div className="mb-8 px-5">
            <h2 className="text-4xl font-antonio font-bold text-black leading-tight mb-4">
              STRATEGIC 
              APPROACH
            </h2>
            <p className="text-gray-600 text-base">
              The way we work has changed, but learning software hasnt. until now.
            </p>
          </div>

          {/* Features Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handlers.onMouseDown}
            onMouseUp={handlers.onMouseUp}
            onMouseMove={handlers.onMouseMove}
            onMouseLeave={handlers.onMouseLeave}
          >
            <div className="flex gap-4 px-5 pb-4 snap-x snap-mandatory">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} ${feature.textColor} rounded-xl p-6 w-[280px] h-[480px] flex flex-col justify-between snap-start flex-shrink-0`}
                >
                  {/* Number at top left */}
                  <div className="text-8xl font-antonio font-medium ">
                    {feature.number}
                  </div>

                  {/* Title and description at bottom */}
                  <div>
                    <h3 className="text-4xl font-antonio font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-md opacity-80 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

export default FeaturesGrid;