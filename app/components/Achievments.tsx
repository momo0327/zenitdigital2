'use client'
import React, { useState, useEffect, useRef } from 'react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    sales: 0,
    development: 0,
    services: 0,
    rating: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      id: 'sales',
      value: 50,
      suffix: '+',
      label: 'ökad försäljning',
      duration: 2000
    },
    {
      id: 'development',
      value: 100,
      suffix: '+',
      label: 'snabbare utvecklingstakt',
      duration: 2000
    },
    {
      id: 'services',
      value: 2,
      suffix: '',
      label: 'heltidstjänster frigjorda genom automatisering',
      duration: 1500
    },
    {
      id: 'rating',
      value: 4.7,
      suffix: '',
      label: 'snittbetyg i App Store',
      duration: 2000,
      decimals: 1
    }
  ];

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate counting numbers
  useEffect(() => {
    if (!isVisible) return;

    achievements.forEach((achievement) => {
      const startTime = Date.now();
      const endValue = achievement.value;
      const duration = achievement.duration;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = easeOutQuart * endValue;

        setCounts((prev) => ({
          ...prev,
          [achievement.id]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    });
  }, [isVisible]);

  const formatNumber = (num: number, decimals?: number) => {
    if (decimals !== undefined) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toString();
  };

  return (
    <div 
      ref={sectionRef}
      className="bg-black min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-20"
    >
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Title and Description */}
          <div className="flex flex-col justify-center">
            <div 
              className={`inline-block mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="bg-white/5 text-white px-6 py-2 rounded-full text-sm font-medium">
                Resultat
              </span>
            </div>
            
            <h2 
              className={`text-4xl md:text-6xl lg:text-6xl font-light text-white mb-8 leading-tight transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Digitala lösningar som<br />
              gör skillnad
            </h2>
            
            <p 
              className={`text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Digitala tjänster som förbättrar vardagen för miljoner människor världen över. 
              Genom smart teknik och beprövad metodik skapar vi värde, både för affären och användaren.
            </p>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <div className="flex flex-col">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4">
                    {formatNumber(counts[achievement.id as keyof typeof counts], achievement.decimals)}
                    <span className="text-white">{achievement.suffix}</span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-snug">
                    {achievement.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;