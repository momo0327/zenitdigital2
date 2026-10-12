import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="px-2 md:px-12 lg:px-8 bg-[#F5F5F5] lg:py-20 py-17">
      <div className="bg-[#001028] rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl">

          {/* Left Content */}
          <div className="flex flex-col justify-center items-center lg:items-start max-w-8xl">
            <h1 className="text-6xl text-center lg:text-left md:text-6xl lg:text-8xl xl:text-8xl font-antonio font-bold text-[#67E8F9] mb-6">
              AI <br /> Development
            </h1>

            <p className="text-[#67E8F9] text-center lg:text-left text-lg md:text-xl lg:text-2xl mb-8 max-w-lg">
              Practical AI work, whether you&apos;re starting from scratch or already shipping. Sized to the problem you&apos;re solving, not the hype cycle.
            </p>

            <div className="flex justify-center lg:justify-start flex-row gap-4">
              <Link href="/ContactPage">
                <button className="bg-[#67E8F9] hover:bg-[#A5F3FC] text-[#001028] font-semibold px-4 py-3 text-sm md:px-6 md:py-3 rounded-full md:text-md transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
              </Link>
              <Link href="/ContactPage">
                <button className="border border-[#67E8F9] text-[#67E8F9] font-semibold md:px-6 md:py-3 rounded-full text-md px-4 py-3 text-sm transition-all duration-300 backdrop-blur-sm hover:bg-[#67E8F9]/10">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right side — capability stack */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-3 md:gap-4 w-full max-w-md">
              {[
                { label: 'Anthropic', sub: 'Claude integrations & agentic workflows' },
                { label: 'OpenAI', sub: 'GPT, embeddings, structured outputs' },
                { label: 'Google AI', sub: 'Gemini & Vertex AI integrations' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-[#67E8F9]/30 rounded-xl px-5 py-4 md:px-6 md:py-5 hover:border-[#67E8F9] transition-colors"
                >
                  <p className="text-[#67E8F9] font-antonio font-bold text-xl md:text-2xl">
                    {item.label}
                  </p>
                  <p className="text-[#67E8F9]/70 text-sm md:text-base mt-1">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
