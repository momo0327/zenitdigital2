import React from 'react';
import Link from 'next/link';

interface CTAProps {
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
}

const CTA: React.FC<CTAProps> = ({
  bgColor = 'bg-[#240000]',
  textColor = 'text-white',
  accentColor = 'text-[#FF5147]'
}) => {
  return (
    <div className="px-5 md:px-12 lg:px-16 2xl:px-16 py-16 md:py-20 lg:py-24 2xl:py-32 bg-white">
      <div className="max-w-6xl 2xl:max-w-[2250px] mx-auto relative">
        <div className={`${bgColor} rounded-xl 2xl:rounded-2xl px-8 py-24 md:px-16 md:py-20 lg:px-20 lg:py-24 2xl:px-28 2xl:py-32 text-center relative overflow-hidden`}>

          {/* Content */}
          <div className="relative z-10 max-w-2xl 2xl:max-w-4xl mx-auto">
            <p className={`${textColor} font-bold font-antonio text-lg 2xl:text-2xl`}>COME ON</p>
            <h2 className={`text-5xl md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-[10rem] font-antonio font-bold ${accentColor} leading-tight mb-6 2xl:mb-10`}>
              LETS MAKE
              <br />
               IT HAPPEN
            </h2>


            <Link href="/ContactPage">
              <button className="text-[#240000] bg-white font-semibold font-antonio px-8 py-3 md:px-6 md:py-2 2xl:px-10 2xl:py-4 rounded-full text-lg md:text-md 2xl:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                LETS TALK
              </button>
            </Link>
          </div>

          {/* Decorative Elements */}

        </div>
      </div>
    </div>
  );
};

export default CTA;