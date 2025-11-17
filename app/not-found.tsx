'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0558F9] via-[#5227FF] to-[#BEA1FC] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 404 Number - Large and prominent */}
        <div className="mb-8">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-antonio font-bold text-white/10 leading-none select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <p className="text-white text-4xl md:text-6xl lg:text-7xl font-antonio font-bold tracking-tight mb-4">
              PAGE NOT FOUND
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-48 md:mt-64 lg:mt-80 space-y-6">
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            Oops! Looks like you&apos;ve ventured into uncharted territory.
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/">
              <button className="group relative px-8 py-4 bg-white text-[#0558F9] font-semibold text-lg rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[200px]">
                <span className="relative z-10">Go Home</span>
              </button>
            </Link>

            <button
              onClick={() => router.back()}
              className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#0558F9] transition-all duration-300 transform hover:scale-105 min-w-[200px]"
            >
              <span className="relative z-10">Go Back</span>
            </button>
          </div>

          {/* Quick links */}
          <div className="pt-12">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-4">
              Or explore these pages
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/WebDev"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Web Development
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/MobileDev"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Mobile Development
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/FullstackDev"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Fullstack Development
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/ContactPage"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
