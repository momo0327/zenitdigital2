'use client'
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useDragScroll } from '@/app/hooks/useDragScroll';
import { SERVICES_OVERVIEW } from '@/app/constants/content';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '@/app/utils/image';
import { AvatarCircles } from '../ui/avatar-circles';
import { ArrowRight } from 'lucide-react';

const ServicesScroll = () => {
  const { scrollContainerRef, handlers } = useDragScroll({ scrollSpeed: 2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    // Auto-scroll every 4 seconds
    autoScrollInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % SERVICES_OVERVIEW.items.length;

        // Scroll to the next card
        if (scrollContainerRef.current) {
          const cardWidth = scrollContainerRef.current.scrollWidth / SERVICES_OVERVIEW.items.length;
          scrollContainerRef.current.scrollTo({
            left: cardWidth * nextIndex,
            behavior: 'smooth'
          });
        }

        return nextIndex;
      });
    }, 4000);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isPaused, SERVICES_OVERVIEW.items.length, scrollContainerRef]);

  // Pause auto-scroll on hover or interaction
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (handlers.onMouseEnter) handlers.onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (handlers.onMouseLeave) handlers.onMouseLeave();
  };

  return (
    <div className="bg-white min-h-screen py-32 md:py-28 lg:py-44 2xl:py-56">
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 lg:mb-24 2xl:mb-32 px-5 md:px-12 lg:px-16 2xl:px-24">
          <div className="max-w-7xl 2xl:max-w-[2400px] mx-auto">
            {/* Avatar Circles and Text */}
            <div className="inline-flex items-center gap-3 2xl:gap-4 mb-8 md:mb-10 2xl:mb-14 bg-[#F4F4F4] px-6 py-2 2xl:px-8 2xl:py-3 rounded-full">
              <AvatarCircles
                numPeople={99}
                avatarUrls={[
                  {
                    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
                    profileUrl: "#",
                  },
                  {
                    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
                    profileUrl: "#",
                  },

                ]}
              />
              <p className="text-xs md:text-sm 2xl:text-lg text-gray-500 font-normal">
                Elevating software for startups and business
              </p>
            </div>

            {/* Large Title */}
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] 2xl:text-[15rem] font-bold font-antonio text-black leading-[0.85] mb-8 md:mb-12 2xl:mb-16">
              {SERVICES_OVERVIEW.title}
            </h1>

            {/* Button and Subtitle Row */}
            <div className="flex flex-col md:flex-row-reverse md:items-start md:justify-between gap-6 md:gap-8 2xl:gap-12">
              {/* Subtitle on the right (desktop) / under title (mobile) */}
              <div className="md:max-w-lg 2xl:max-w-3xl">
                <p className="text-base md:text-lg lg:text-xl 2xl:text-4xl text-gray-700 leading-relaxed text-left">
                  {SERVICES_OVERVIEW.subtitle}
                </p>
              </div>

              {/* Button on the left (desktop) / under subtitle (mobile) */}
              <Link href="/ContactPage">
                <button className="group bg-[#F4F4F4] text-black font-medium text-sm md:text-lg 2xl:text-2xl px-5 py-3 md:px-8 md:py-4 2xl:px-12 2xl:py-5 rounded-full hover:bg-gray-300 transition-all duration-300 flex items-center gap-2">
                  Let's Talk
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Services */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handlers.onMouseDown}
          onMouseUp={handlers.onMouseUp}
          onMouseMove={handlers.onMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-6 md:gap-8 2xl:gap-12 pl-5 md:px-12 lg:px-16 2xl:px-24 pb-8 2xl:pb-12">
            {SERVICES_OVERVIEW.items.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block flex-shrink-0 group"
              >
                <div
                  className={`${service.bgColor} rounded-2xl 2xl:rounded-3xl p-8 md:p-12 lg:p-14 2xl:p-20 w-[340px] h-[480px] md:w-[800px] md:h-[420px] lg:w-[1000px] 2xl:w-[1400px] 2xl:h-[600px] flex flex-col md:flex-row items-center md:justify-between transition-shadow duration-300 group-hover:shadow-2xl`}
                >
                  {/* Text Content */}
                  <div className="flex-1 text-left mb-6 md:mb-0">
                    <h3 className={`text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-bold font-antonio ${service.textColor} mb-4 2xl:mb-6 leading-tight`}>
                      {service.title}
                    </h3>
                    <p className={`text-base md:text-lg lg:text-xl 2xl:text-3xl ${service.textColor} opacity-80 leading-relaxed md:max-w-md 2xl:max-w-2xl`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0 flex items-center justify-center md:ml-8 2xl:ml-12 mt-auto">
                    <OptimizedImage
                      src={service.image}
                      alt={`${service.title} - Zenit Digital`}
                      width={300}
                      height={250}
                      className="w-[220px] md:w-[220px] lg:w-[280px] 2xl:w-[400px] h-auto object-contain"
                      quality={IMAGE_QUALITY.HIGH}
                      enableBlur
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesScroll;
