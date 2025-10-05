import React from 'react';
import Link from 'next/link';
const TriHeader = () => {
  return (
    <div className="px-6 md:px-12 lg:px-8 bg-white">
      <div className="bg-[#F4F4F6] rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[600px] flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          {/* Left side - Content */}
          <div className="flex-1 w-full text-left">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-antonio font-bold text-[#0558F9] leading-tight  mb-8">
              Fullstack Develpment
            </h2>
            <p className="text-xl md:text-xl text-[#0558F9] mb-10 leading-tight">
              Discover a revolutionary way to learn with our cutting-edge platform that adapts to your pace and style.
            </p>
            <div className="flex  gap-4">
            <Link href="/FullstackDev">
              <button className="bg-[#0558F9] text-white px-6 py-3 text-sm  rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get Started
              </button>
              </Link>

              <button className="border-2 border-[#0558F9] text-[#0558F9] px-6 py-3 text-sm  rounded-full font-semibold hover:bg-[#0558F9] hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Phone Image */}
          <div className="flex-1 flex justify-center overflow-hidden relative lg:justify-end  ">
  <img 
    src="/sana-learn-1 2.png" 
    alt="Learning Features"
    className="min-w-[400px] md:min-w-[1600px] lg:min-w-[600px]  h-auto object-cover  z-50"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default TriHeader;