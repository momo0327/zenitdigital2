'use client'
import React from 'react';
import { Palette, Zap, TrendingUp } from 'lucide-react';
import { SERVICES } from '@/app/constants/content';

const iconMap = {
  Palette: Palette,
  Zap: Zap,
  TrendingUp: TrendingUp,
};

const AdvantageCards = () => {
  const advantages = SERVICES.web.advantages;

  return (
    <div className="px-2 md:px-12 lg:px-8 bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {advantages.map((advantage, index) => {
            const IconComponent = iconMap[advantage.icon as keyof typeof iconMap];

            return (
              <div
                key={index}
                className="bg-[#240000] rounded-lg p-10 md:p-12 lg:p-14 min-h-[280px] md:min-h-[320px] hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col">
                  <div className="mb-6 md:mb-8">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-[#FF5147]" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FF5147] mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#FF5147]/80 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdvantageCards;
