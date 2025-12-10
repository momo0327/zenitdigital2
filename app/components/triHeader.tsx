import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from './ui/OptimizedImage';
import { IMAGE_QUALITY } from '../utils/image';
const TriHeader = () => {
  return (
    <div className="px-2 md:px-12 lg:px-4 2xl:px-8 bg-white py-6 2xl:py-10">
      <div className="bg-[#051E01] rounded-xl px-6 md:px-10 lg:px-16 2xl:px-24 py-12 md:py-12 2xl:py-16 h-[700px] md:h-[600px] lg:h-[550px] 2xl:h-[700px] w-full mx-auto flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 2xl:gap-24 w-full">
          {/* Left side - Content */}
          <div className="flex-1 w-full text-left">
            <h2 className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[10rem] font-antonio font-bold text-[#B4FFA8] leading-none mb-8 2xl:mb-12">
              Fullstack Develpment
            </h2>
            <p className="text-xl md:text-xl 2xl:text-3xl text-[#B4FFA8] mb-10 2xl:mb-14 leading-tight">
              Discover a revolutionary way to learn with our cutting-edge platform that adapts to your pace and style.
            </p>
            <div className="flex gap-4 2xl:gap-6">
            <Link href="/services">
              <button className="bg-[#B4FFA8] text-black px-6 py-3 2xl:px-10 2xl:py-4 text-sm 2xl:text-lg rounded-full font-semibold hover:bg-[#B4FFA8] transition-colors duration-200">
                Explore
              </button>
              </Link>

              <button className="border-2 border-[#B4FFA8] text-[#B4FFA8] px-6 py-3 2xl:px-10 2xl:py-4 text-sm 2xl:text-lg rounded-full font-semibold hover:bg-[#0558F9] hover:text-white transition-all duration-200">
                Cobtact
              </button>
            </div>
          </div>

          {/* Right side - Phone Image */}
          <div className="flex-1 flex justify-center overflow-hidden relative lg:justify-end">
            <OptimizedImage
              src="/sana-learn-1 2.png"
              alt="Fullstack development - Complete end-to-end solutions from frontend to backend infrastructure"
              width={390}
              height={227}
              className="min-w-[400px] md:min-w-[600px] lg:min-w-[600px] 2xl:min-w-[800px] h-auto object-cover z-50"
              quality={IMAGE_QUALITY.MAX}
              enableBlur
            />
</div>

        </div>
      </div>
    </div>
  );
};

export default TriHeader;