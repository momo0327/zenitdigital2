import React from "react";
import Link from "next/link";

const IntroText = () => {
  return (
    <div className="bg-white px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {/* Empty left side */}
        <div className="hidden lg:block"></div>

        {/* Right side with text */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left text-black">
            We are an award winning strategic design studio focusing on building{" "}
            <span className="text-[#C0C0C0]">
              bespoke websites and brand indentities that instill trust, make an
              impact, and drive growth.
            </span>
          </h2>

          <Link
            href="/ContactPage"
            className="inline-flex items-center gap-2 text-base font-medium text-black hover:text-gray-700 transition-colors duration-200 border-b-2 border-black hover:border-gray-700"
          >
            Lets collaborate
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M4 10H16M16 10L11 5M16 10L11 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
