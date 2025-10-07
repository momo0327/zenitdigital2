import React from 'react';

const Header = () => {
  return (
    <div className="px-2 md:px-12 lg:px-8 bg-white lg:py-20 py-17">
      <div className="bg-[#010A1E] rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] relative">
        {/* Title positioned at the very top */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-antonio lg:text-9xl font-bold text-center wei text-[#14AAFF] mb-[-15px] lg:mb-[-30px]">
            We Develop<br /> Your Dreams.
          </h1>
        </div>

        {/* Image positioned below */}
        <div className="flex justify-center">
          <img
            src="/phoneHeader.png"
            alt="Phone Header"
            className="w-72 md:w-80 lg:w-96 xl:w-[450px] h-auto object-contain"
          />
        </div>

        {/* Text and Buttons - Positioned on the right side */}
        <div className="absolute right-8 lg:right-16 top-[60%] -translate-y-1/2 hidden lg:flex flex-col items-start max-w-sm">
          <p className="text-[#14AAFF] text-lg font-medium mb-6">
            The way we work has changed, but learning software hasnt. until now.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-2 bg-[#14AAFF] text-black text-sm font-medium rounded-full hover:bg-[#0E95E6] transition-all duration-200">
              Demo
            </button>
            <button className="px-6 py-2 border-2 border-[#14AAFF] text-[#14AAFF] text-sm font-medium rounded-full hover:bg-[#14AAFF] hover:text-black transition-all duration-200">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;