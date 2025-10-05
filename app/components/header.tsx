import React from 'react';

const Header = () => {
  return (
    <div className="px-2 md:px-12 lg:px-8 bg-white lg:py-20 py-17">
      <div className="bg-[#010A1E] rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        {/* Title positioned at the very top */}
        <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-antonio lg:text-9xl font-bold text-center wei text-[#14AAFF] mb-[-15px] lg:mb-[-30px] ">
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
      </div>
    </div>
  );
};

export default Header;