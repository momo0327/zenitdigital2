import React from 'react';

const BigText = () => {
  return (
    <div className="bg-white min-h-screen flex items-center flex-col justify-center py-48 px-4 sm:px-6 lg:px-48">
    {/* Main heading section */}
    <div className="max-w-7xl mx-auto w-full flex justify-center lg:justify-end mb-20 lg:mb-16">
      <div className="text-center lg:text-left max-w-2xl lg:max-w-none">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium text-black leading-tight mb-8">
          We are award-winning strategic design<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>studios focusing on building bespoke<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>websites and brand identities that instill<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>trust, make an impact, and drive growth.
        </h1>
                   
        <div className="mt-8 lg:mt-12">
          <button className="inline-flex items-center text-base lg:text-lg font-medium text-black hover:text-gray-700 transition-colors border-b border-black hover:border-gray-700 pb-1">
            Let's Collaborate
            <svg className="w-4 h-4 lg:w-5 lg:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BigText;