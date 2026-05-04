import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORY_THEMES } from '../constants/content';

export const metadata: Metadata = {
  title: 'Our Work - Zenia Digital',
  description: 'Selected case studies from Zenia Digital — web platforms, mobile apps, full-stack systems, and AI integrations.',
  robots: { index: false, follow: false },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-antonio font-bold text-black mb-8">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Selected projects across web, mobile, full-stack, and AI. More case studies are landing soon — drop us a note if you want to see something specific.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
            {PORTFOLIO_ITEMS.map((project, index) => {
              const theme = PORTFOLIO_CATEGORY_THEMES[project.category];
              return (
                <Link
                  key={index}
                  href={project.link}
                  className="group block bg-white rounded-xl 2xl:rounded-2xl overflow-hidden border-2 border-transparent hover:border-black transition-all duration-300"
                >
                  {/* Image container — fixed 16:9 ratio so every card matches */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className={`absolute inset-0 ${theme.bgColor} flex items-center justify-center`}>
                        <span className={`${theme.textColor} text-3xl font-antonio font-bold opacity-40`}>
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 2xl:p-8">
                    <p className="text-sm text-gray-500 font-medium mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-antonio font-bold text-black mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
