import React from 'react';

const CTA = () => {
  return (
    <div className="px-5 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-[#240000] rounded-xl px-8 py-24 md:px-16 md:py-20 lg:px-20 lg:py-24 text-center relative overflow-hidden">

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className='text-white font-bold font-antonio text-lg'>COME ON</p>
            <h2 className="text-5xl md:text-4xl lg:text-5xl xl:text-8xl font-antonio font-bold text-[#FF5147] leading-tight mb-6">
              LETS MAKE 
              <br />
               IT HAPPEN
            </h2>
            
            
            <button className="text-[#240000] bg-white font-semibold font-antonio px-8 py-3 md:px-6 md:py-2 rounded-full text-lg md:text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              LETS TALK
            </button>
          </div>

          {/* Decorative Elements */}
          
        </div>
      </div>
    </div>
  );
};

export default CTA;