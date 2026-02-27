'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useDragScroll } from '@/app/hooks/useDragScroll';
import { SERVICES_OVERVIEW } from '@/app/constants/content';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesScroll = () => {
  const { scrollContainerRef, handlers } = useDragScroll({ scrollSpeed: 2 });
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    // Auto-scroll every 4 seconds
    autoScrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.scrollWidth / SERVICES_OVERVIEW.items.length;
        const currentScroll = container.scrollLeft;
        const nextScroll = currentScroll + cardWidth;

        // Loop back to start if at the end
        if (nextScroll >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollTo({ left: nextScroll, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  // Pause auto-scroll on hover or interaction
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (e: any) => {
    setIsPaused(true);
    handlers.onMouseEnter(e);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    handlers.onMouseLeave();
  };

  return (
    <div className="bg-white min-h-screen py-32 md:py-28 lg:py-44 2xl:py-56">
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 lg:mb-24 2xl:mb-32 px-5 md:px-12 lg:px-16 2xl:px-24">
          <div className="max-w-7xl 2xl:max-w-[2400px] mx-auto">
            {/* Title and Subtitle in parallel layout */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 lg:gap-16 2xl:gap-24 mb-12 md:mb-16 2xl:mb-20">
              {/* Title on the left */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-antonio text-black leading-tight md:max-w-xl lg:max-w-xl 2xl:max-w-4xl">
                {SERVICES_OVERVIEW.title}
              </h1>

              {/* Subtitle on the right, parallel to title */}
              <div className="md:max-w-md lg:max-w-lg 2xl:max-w-2xl md:pt-2">
                <p className="text-base md:text-lg lg:text-xl 2xl:text-3xl text-gray-700 leading-relaxed">
                  {SERVICES_OVERVIEW.subtitle}
                </p>
                {/* Optional CTA Button */}
                <Link href="/ContactPage" className="inline-block mt-6 2xl:mt-8">
                  <button className="group bg-[#F4F4F4] text-black font-medium text-sm md:text-base 2xl:text-xl px-6 py-3 md:px-8 md:py-4 2xl:px-10 2xl:py-5 rounded-full hover:bg-gray-300 transition-all duration-300 flex items-center gap-2">
                    Let&apos;s Talk
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
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
              <div
                key={index}
                className="block flex-shrink-0 group"
              >
                <div
                  className={`${service.bgColor} rounded-2xl 2xl:rounded-3xl p-8 md:p-12 lg:p-16 2xl:p-20 w-[85vw] md:w-[700px] lg:w-[900px] 2xl:w-[1100px] h-[500px] md:h-[500px] lg:h-[500px] 2xl:h-[600px] flex flex-col justify-between transition-shadow duration-300 group-hover:shadow-2xl`}
                >
                  {/* Text Content */}
                  <div className="text-left">
                    <h3 className={`text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold font-antonio ${service.textColor} mb-6 2xl:mb-8 leading-none`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm md:text-base lg:text-lg 2xl:text-xl lg:w-max-md ${service.textColor} opacity-80 leading-relaxed`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Technologies at bottom */}
                  {'technologies' in service && service.technologies && (
                    <div className="flex gap-2 2xl:gap-3 flex-wrap">
                      {service.technologies.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className={`${service.textColor} bg-white/10 backdrop-blur-sm px-3 py-1.5 2xl:px-4 2xl:py-2 rounded-full text-xs md:text-sm 2xl:text-base font-medium border border-current/20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesScroll;
