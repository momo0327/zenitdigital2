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
                  Let&apos;s Talk
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
                  className={`${service.bgColor} rounded-2xl 2xl:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 2xl:p-20 w-[85vw] min-w-[300px] max-w-[380px] h-auto min-h-[500px] sm:w-[90vw] sm:max-w-[400px] md:w-[700px] md:max-w-[800px] md:h-[420px] lg:w-[900px] lg:max-w-[1000px] lg:h-[420px] 2xl:w-[1200px] 2xl:max-w-[1400px] 2xl:h-[600px] flex flex-col md:flex-row items-center md:items-start md:justify-between transition-shadow duration-300 group-hover:shadow-2xl`}
                >
                  {/* Text Content */}
                  <div className="flex-1 text-left mb-6 md:mb-0">
                    <h3 className={`text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold font-antonio ${service.textColor} mb-4 2xl:mb-6 leading-tight`}>
                      {service.title}
                    </h3>
                    <p className={`text-base md:text-lg lg:text-md 2xl:text-2xl ${service.textColor} opacity-80 leading-relaxed md:max-w-md 2xl:max-w-2xl mb-4 2xl:mb-6`}>
                      {service.description}
                    </p>
                    {'technologies' in service && service.technologies && (
                      <div className="flex gap-1.5 md:gap-2 2xl:gap-3 flex-wrap mt-3 2xl:mt-4">
                        {service.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className={`${service.textColor} bg-white/10 backdrop-blur-sm px-2 py-0.5 md:px-2.5 md:py-1 2xl:px-4 2xl:py-1.5 rounded-full text-[10px] md:text-xs 2xl:text-base font-medium border border-current/20`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0 flex items-center justify-center md:ml-6 lg:ml-8 2xl:ml-12 mt-4 md:mt-0 w-[180px] sm:w-[200px] md:w-[200px] lg:w-[260px] xl:w-[300px] 2xl:w-[400px] h-[180px] sm:h-[200px] md:h-[200px] lg:h-[260px] xl:h-[300px] 2xl:h-[400px]">
                    <OptimizedImage
                      src={service.image}
                      alt={`${service.title} - Zenit Digital`}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain max-w-full max-h-full"
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
