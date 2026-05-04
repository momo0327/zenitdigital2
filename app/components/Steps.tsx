'use client'
import React from 'react';
import { MessageCircle, Target, Code, Rocket } from 'lucide-react';
import { useDragScroll } from '@/app/hooks/useDragScroll';

interface StepsProps {
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  cardBgColor?: string;
  cardTextColor?: string;
  iconBgColor?: string;
  iconColor?: string;
}

const Steps: React.FC<StepsProps> = ({
  bgColor = 'bg-black',
  titleColor = 'text-[#CCD8E1]',
  subtitleColor = 'text-gray-400',
  cardBgColor = 'bg-[#0D0D0D]',
  cardTextColor = 'text-white',
  iconBgColor = 'bg-white/5',
  iconColor = 'text-white'
}) => {
  const { scrollContainerRef, handlers } = useDragScroll({ scrollSpeed: 2 });

  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Tell us what you want to build, who it's for, and what success looks like. We'll reply within a working day.",
      icon: MessageCircle
    },
    {
      number: "02",
      title: "Strategic Meeting",
      description: "We map scope, timeline, and budget together, then send a written proposal you can hold us to.",
      icon: Target
    },
    {
      number: "03",
      title: "Development",
      description: "We build in two-week sprints with weekly demos, so you see real progress instead of status reports.",
      icon: Code
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We ship to production, monitor performance, and iterate post-launch. Your product keeps evolving past day one.",
      icon: Rocket
    }
  ];

  return (
    <div className={`${bgColor} pt-16 md:pt-20 lg:pt-42 2xl:pt-56 pb-12 md:pb-16 lg:pb-20 2xl:pb-24`}>
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 2xl:mb-16 px-5 md:px-12 lg:px-16 2xl:px-24">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold font-antonio ${titleColor} leading-tight mb-4 2xl:mb-8`}>
          FROM FIRST CALL TO <br className="hidden md:block" />  LIVE PRODUCT
          </h2>
          <p className={`${subtitleColor} text-base md:text-lg 2xl:text-3xl max-w-xl 2xl:max-w-3xl`}>
            A clear four-step process from first conversation to launched product. No scope creep, no surprises.
</p>
        </div>

        {/* Horizontal Scroll Steps */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handlers.onMouseDown}
          onMouseUp={handlers.onMouseUp}
          onMouseMove={handlers.onMouseMove}
          onMouseLeave={handlers.onMouseLeave}
        >
          <div className="flex gap-4 md:gap-6 2xl:gap-10 px-5 md:px-12 lg:px-16 2xl:px-24 pb-4 2xl:pb-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className={`${cardBgColor} rounded-2xl 2xl:rounded-3xl p-8 md:p-10 2xl:p-20 w-[350px] md:w-[400px] lg:w-[420px] 2xl:w-[600px] h-76 md:h-74 2xl:h-120 flex flex-col justify-between flex-shrink-0`}
                >
                  <div className=''>
                    <div className="mb-6 2xl:mb-10">
                      <div className={`${iconBgColor} p-3 2xl:p-5 rounded-xl 2xl:rounded-2xl w-fit`}>
                        <IconComponent className={`w-5 h-5 md:w-6 md:h-6 2xl:w-10 2xl:h-10 ${iconColor}`} />
                      </div>
                    </div>
                    <h3 className={`text-xl md:text-2xl 2xl:text-4xl font-bold mb-3 2xl:mb-6 ${cardTextColor}`}>
                      {step.title}
                    </h3>
                    <p className={`text-md md:text-base 2xl:text-2xl ${cardTextColor} opacity-70 leading-relaxed pb-6 md:pb-8 2xl:pb-24`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;