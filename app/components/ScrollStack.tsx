'use client'
import React, { useState, useEffect, useRef } from 'react';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';
import { useDebounce } from '@/app/hooks/useDebounce';

export default function ScrollStack() {
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);
  // Debounce scroll progress to reduce re-renders during scrolling
  const debouncedScrollProgress = useDebounce(scrollProgress, 16); // ~60fps
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    { 
      type: 'text',
      title: 'HOW WE CAN ELEVATE YOUR\u00A0STARTUP',
      subtitle: 'We are an award winning strategic design studio focusing on building bespoke websites and brand identities that instill trust, make an impact, and drive growth.',
      bg: 'bg-white',
      textColor: 'text-black'
    },
    { 
      type: 'image',
      color: 'bg-[#F6F5F8]',
      title: 'Prototype & MVP',
      subtitle: 'We are an award winning strategic design studio focusing on building bespoke websites and brand identities that instill trust, make an impact, and drive growth.',
      image: '/p-10 2.png',
      imageSize: 'max-w-sm',
      textColor: 'text-gray-800',
      imagePosition: 'right'
    },
    { 
      type: 'image',
      color: 'bg-[#9AC2FF]',
      title: 'Digital Partner',
      subtitle: 'We are an award winning strategic design studio focusing on building bespoke websites and brand indentities that instill trust, make an impact, and drive growth. ',
      image: '/image 121.png',
      imageSize: 'max-w-xl',
      textColor: 'text-black',
      imagePosition: 'left'
    },
    {
      type: 'image',
      color: 'bg-black',
      title: 'Launch & Scale',
      subtitle: 'Take your product to market with confidence',
      image: '/h-10 2.png',
      imageSize: 'max-w-lg',
      textColor: 'text-white',
      imagePosition: 'right'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const progress = sectionRefs.current.map((_ref, i) => {
        if (!_ref) return 0;

        const nextRef = sectionRefs.current[i + 1];
        
        if (nextRef) {
          const nextRect = nextRef.getBoundingClientRect();
          const coverage = Math.max(0, Math.min(1, (window.innerHeight - nextRect.top) / window.innerHeight));
          return coverage;
        }
        return 0;
      });
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {sections.map((section, i) => {
        const progress = debouncedScrollProgress[i] || 0;
        const blur = progress * 10;
        const scale = 1 - progress * 0.15;
        
        // Use the section's own background color
        const backgroundColor = section.bg || section.color;

        return (
          <div
            key={i}
            ref={el => { sectionRefs.current[i] = el; }}
            className={`sticky top-0 h-screen flex items-center justify-center rounded-t-2xl overflow-hidden ${backgroundColor}`}
            style={{ zIndex: i + 1 }}
          >
            {section.type === 'text' ? (
              <div
                className={`absolute inset-0 ${section.bg} flex items-center mb-8 justify-center will-change-transform`}
                style={{
                  filter: `blur(${blur}px)`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center'
                }}
              >
                <div className="max-w-5xl 2xl:max-w-7xl w-full px-6 md:px-8 2xl:px-12 mx-auto">
                  <h1
                    className={`text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold ${section.textColor} text-left leading-tight font-antonio mb-6 md:mb-8 2xl:mb-12`}
                    style={{
                      opacity: 1 - progress * 0.6
                    }}
                  >
                    {section.title}
                  </h1>

                  <div className="flex justify-start md:justify-end">
                    <p
                      className={`text-base md:text-lg 2xl:text-2xl ${section.textColor} opacity-70 max-w-md 2xl:max-w-2xl text-left md:leading-tight`}
                      style={{
                        opacity: 1 - progress * 0.6
                      }}
                    >
                      {section.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div 
                className={`absolute inset-0 ${section.color} will-change-transform`}
                style={{
                  filter: `blur(${blur}px)`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center'
                }}
              >
                <div
                  className={`h-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-16 2xl:px-24 py-12 2xl:py-16 gap-8 lg:gap-16 2xl:gap-24 max-w-7xl 2xl:max-w-[2000px] mx-auto ${
                    section.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
                  }`}
                  style={{
                    opacity: 1 - progress * 0.6
                  }}
                >
                  <div className="w-full lg:flex-1 text-left">
                    <h2 className={`text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl font-bold ${section.textColor} mb-4 md:mb-6 2xl:mb-10 leading-tight font-antonio`}>
                      {section.title}
                    </h2>
                    <p className={`text-base md:text-xl 2xl:text-3xl ${section.textColor} opacity-70 leading-relaxed`}>
                      {section.subtitle}
                    </p>
                  </div>

                  <div className="w-full lg:flex-1 flex items-center justify-center">
                    {section.type === 'image' && section.image && (
                      <OptimizedImage
                        src={section.image}
                        alt={`${section.title} - ${section.subtitle}`}
                        width={600}
                        height={700}
                        className={`w-full ${section.imageSize} 2xl:max-w-4xl h-auto object-contain drop-shadow-2xl`}
                        quality={IMAGE_QUALITY.HIGH}
                        enableBlur
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}