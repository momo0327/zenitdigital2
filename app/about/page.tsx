import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Zenit Digital',
  description: 'Learn about Zenit Digital, our mission, values, and the team behind innovative digital solutions. Based in Sweden, serving clients internationally.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-antonio font-bold text-black mb-8">
            About Zenit
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl leading-relaxed">
            We are an award-winning strategic design studio focusing on building bespoke websites and brand identities that instill trust, make an impact, and drive growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-gradient-to-br from-[#0558F9] to-[#5227FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-antonio font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                At Zenit Digital, we believe in the power of great design and cutting-edge technology to transform businesses. Our mission is to create digital experiences that not only look stunning but also deliver measurable results.
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                We partner with forward-thinking companies to build products that their customers love and that drive sustainable growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: '50+', label: 'Projects Delivered' },
                { number: '30+', label: 'Happy Clients' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '5★', label: 'Average Rating' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-antonio font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-black mb-16 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve, constantly exploring new technologies and approaches to deliver cutting-edge solutions.'
              },
              {
                title: 'Quality',
                description: 'We never compromise on quality. Every line of code, every pixel, every interaction is crafted with meticulous attention to detail.'
              },
              {
                title: 'Partnership',
                description: 'Your success is our success. We work closely with our clients as true partners, not just service providers.'
              }
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-3xl font-antonio font-bold text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-black mb-6 text-center">
            Leadership
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Meet the visionary behind Zenit Digital
          </p>

          {/* Featured Team Member */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Profile Image Placeholder */}
                <div className="bg-gradient-to-br from-[#0558F9] to-[#BEA1FC] aspect-square flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-8xl font-antonio text-white">JA</span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-antonio font-bold text-black mb-2">
                    Jassin Al-Safe
                  </h3>
                  <p className="text-xl text-[#0558F9] mb-6">
                    Co-Founder & Creative Director
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With a passion for creating exceptional digital experiences, Jassin leads our creative vision and ensures every project exceeds expectations.
                  </p>
                  <Link
                    href="/ContactPage"
                    className="inline-flex items-center text-black hover:text-[#0558F9] transition-colors font-semibold"
                  >
                    <span className="mr-2">Get In Touch</span>
                    <svg
                      className="w-5 h-5"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-black mb-8">
            Based in Sweden,<br />Serving the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our headquarters are in Sweden, but we work with clients across the globe, delivering world-class digital solutions regardless of geography.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <span className="text-lg">🇸🇪 Sweden</span>
            <span>•</span>
            <span className="text-lg">🌍 International</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your project and create something amazing
          </p>
          <Link href="/ContactPage">
            <button className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
