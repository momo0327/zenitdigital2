'use client'
import React, { useState, useEffect } from 'react';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';

interface Feature {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface ExpandableFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  autoPlayDuration?: number;
}

const ExpandableFeatures: React.FC<ExpandableFeaturesProps> = ({
  title,
  subtitle,
  features,
  autoPlayDuration = 5000
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const increment = 100 / (autoPlayDuration / 50);
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          setActiveIndex((current) => (current + 1) % features.length);
          return 0;
        }

        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, features.length, autoPlayDuration]);

  useEffect(() => {
    // Reset progress when activeIndex changes
    setProgress(0);
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setIsPaused(false);
  };

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20 2xl:py-28">
      <div className="max-w-7xl 2xl:max-w-[2400px] mx-auto px-5 md:px-12 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 2xl:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Title & Subtitle */}
            <h2 className="text-4xl md:text-4xl lg:text-5xl 2xl:text-7xl font-antonio font-bold text-black mb-4 2xl:mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base 2xl:text-2xl leading-relaxed mb-8 2xl:mb-12">
              {subtitle}
            </p>

            {/* Features List */}
            <div className="space-y-4 2xl:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 2xl:pb-6">
                  <button
                    onClick={() => handleItemClick(index)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center justify-between mb-2 2xl:mb-3">
                      <h3 className="text-base md:text-lg 2xl:text-2xl font-medium text-black group-hover:text-gray-700 transition-colors">
                        {feature.title}
                      </h3>
                      <span className="text-2xl md:text-3xl 2xl:text-5xl font-medium text-gray-300">
                        {feature.number}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    {activeIndex === index && (
                      <div className="w-full h-1 2xl:h-2 bg-gray-200 rounded-full overflow-hidden mb-2 2xl:mb-3">
                        <div
                          className="h-full bg-black transition-all duration-50 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}

                    {/* Expandable Description */}
                    {activeIndex === index && (
                      <p className="text-gray-600 text-xs md:text-sm 2xl:text-xl leading-relaxed animate-fadeIn">
                        {feature.description}
                      </p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center bg-gray-50 justify-center rounded-2xl 2xl:rounded-3xl p-12 md:p-16 lg:p-20 2xl:p-28 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] 2xl:min-h-[800px]">
            <div className="w-full">
              <OptimizedImage
                key={activeIndex}
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                width={700}
                height={700}
                className="w-full h-auto object-contain transition-opacity duration-300"
                quality={IMAGE_QUALITY.HIGH}
                enableBlur
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ExpandableFeatures;
