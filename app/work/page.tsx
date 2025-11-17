import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Work - Zenit Digital Portfolio',
  description: 'Explore our portfolio of web development, mobile apps, and fullstack projects. See how we help businesses grow with custom digital solutions.',
};

export default function WorkPage() {
  // Sample projects - replace with real data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with real-time inventory and seamless checkout.',
      image: '/placeholder-project.jpg',
      tags: ['Next.js', 'TypeScript', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure banking app with biometric authentication and instant transfers.',
      image: '/placeholder-project.jpg',
      tags: ['React Native', 'Firebase', 'Banking'],
      link: '#'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Fullstack Development',
      description: 'Analytics dashboard with real-time data visualization and reporting.',
      image: '/placeholder-project.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-antonio font-bold text-black mb-8">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Crafting digital experiences that drive results. Explore our portfolio of successful projects across web, mobile, and fullstack development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={project.link}
                className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#0558F9] to-[#BEA1FC] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl font-antonio opacity-20">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <p className="text-sm text-[#0558F9] font-medium mb-2">
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
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="mt-6 flex items-center text-black group-hover:text-[#0558F9] transition-colors">
                    <span className="font-medium mr-2">View Project</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s create something amazing together
          </p>
          <Link href="/ContactPage">
            <button className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
