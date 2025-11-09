'use client'
import React from 'react';
import { MessageCircle, Target, Code, Rocket } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Reach out to our team and let's start a conversation about your project goals and vision.",
      icon: MessageCircle,
      bgColor: "bg-[#0D0D0D]",
      textColor: "text-white"
    },
    {
      number: "02",
      title: "Strategic Meeting", 
      description: "We dive deep into your requirements, analyze your needs, and craft a tailored strategy for success.",
      icon: Target,
      bgColor: "bg-[#0D0D0D]",
      textColor: "text-white"
    },
    {
      number: "03",
      title: "Development",
      description: "Our expert team brings your vision to life with cutting-edge technology and best practices.",
      icon: Code,
      bgColor: "bg-[#0D0D0D]", 
      textColor: "text-white"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We launch your product and provide ongoing support to ensure continued success and growth.",
      icon: Rocket,
      bgColor: "bg-[#0D0D0D]",
      textColor: "text-white"
    }
  ];

  return (
    <div className="bg-black py-16 md:py-20 lg:py-42 mb-20">
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 px-5 md:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-antonio text-[#CCD8E1] leading-tight mb-4">
          TAKE THE STEPS TO YOUR <br className="hidden md:block" />  STARTUP SUCCESS
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl">
            A streamlined approach to transform your ideas into reality. A streamlined approach to transform your ideas into reality.

          </p>
        </div>

        {/* Horizontal Scroll Steps */}
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-4 md:gap-6 px-5 md:px-12 lg:px-16 pb-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className={`${step.bgColor} ${step.textColor} rounded-2xl p-8 md:p-10 w-[350px] md:w-[400px] lg:w-[420px] h-76 md:h-74 flex flex-col justify-between flex-shrink-0`}
                >
                  <div>
                    <div className="mb-6">
                      <div className="bg-white/5 p-3 rounded-xl w-fit">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-md md:text-base text-white/70 leading-relaxed">
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