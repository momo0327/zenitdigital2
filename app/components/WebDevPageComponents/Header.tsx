import React from 'react';

const Header = () => {
  return (
    <div className="px-2 md:px-12 lg:px-8 bg-white lg:py-20 py-17">
      <div className="bg-[#240000] rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
                 
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl">
                     
          {/* Left Content */}
          <div className="text-white flex flex-col justify-center items-center lg:items-start max-w-8xl">
            <h1 className="text-6xl text-center lg:text-left md:text-6xl lg:text-8xl xl:text-8xl font-antonio font-bold text-[#FF5147]  mb-6">
              Web App <br /> Development
            </h1>
                         
            <p className="text-[#FF5147] text-center lg:text-left text-lg md:text-xl lg:text-2xl mb-8 max-w-lg">
              The way we work has changed, but learning software hasnt. 
            </p>
                         
            <div className="flex justify-center lg:justify-start flex-row gap-4">
              <button className="bg-[#FF5147] hover:bg-[#BEA1FC] text-[#120128] font-semibold px-4 py-3 text-sm md:px-6 md:py-3 rounded-full md:text-md transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="border-1 border-[#FF5147] text-[#FF5147] font-semibold md:px-6 md:py-3 rounded-full text-md px-4 py-3 text-sm transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
           
          {/* Right Image - Made Bigger */}
          <div className="flex justify-center">
            <img 
              src="/Group 6-3.png" 
              alt="Phone Header"
              className="w-80 md:w-96 lg:w-[500px] xl:w-[550px] 2xl:w-[600px] h-auto object-contain "
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Header;