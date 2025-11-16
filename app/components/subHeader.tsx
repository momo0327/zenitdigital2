import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <div className="px-3 bg-white py-12">
      <div className="bg-[#240000] lg:h-[442px] rounded-xl px-10 py-12 max-w-3xl mx-auto flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Left side - Content */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-antonio font-bold text-[#FF5147] leading-tight mb-6">
              Web App Development
            </h2>
            <p className="text-base md:text-lg text-[#FF5147] mb-6 leading-relaxed">
              The way we work has changed, but learning software hasnt.
            </p>
            <div className="flex gap-4">
            <Link href="/WebDev">
              <button className="bg-[#FF5147] text-[#240000] px-6 py-3 text-sm rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200">
                Demo
              </button>
              </Link>
              <button className="border border-[#FF5147] text-[#FF5147] px-6 py-3 text-sm rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200">
                Contact
              </button>
            </div>
          </div>

          {/* Right side - Phone Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/h-2 2.png"
              alt="Web development services - Responsive website design and modern web applications"
              width={384}
              height={400}
              className="w-80 md:w-92 lg:w-96 h-auto object-contain transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;