import React from 'react';
import type { Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services - Zenit Digital',
  description: 'Explore our comprehensive digital services: Web Development, Mobile App Development, and Fullstack Solutions. Custom-built solutions for your business needs.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies. From landing pages to complex web platforms.',
      href: '/WebDev',
      color: 'from-[#FF5147] to-[#FF7B73]',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern Stack'],
      icon: '🌐'
    },
    {
      title: 'Mobile Development',
      description: 'Native iOS and Android applications that deliver exceptional user experiences on any device.',
      href: '/MobileDev',
      color: 'from-[#BEA1FC] to-[#D4C3FF]',
      features: ['Native Apps', 'Cross-Platform', 'Push Notifications', 'Offline Support'],
      icon: '📱'
    },
    {
      title: 'Fullstack Development',
      description: 'Complete end-to-end solutions from frontend to backend, database to deployment.',
      href: '/FullstackDev',
      color: 'from-[#0558F9] to-[#4A8BFF]',
      features: ['Frontend + Backend', 'Database Design', 'API Development', 'Cloud Deployment'],
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-antonio font-bold text-black mb-8">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
            From concept to deployment, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block"
              >
                <div className="h-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-black hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-antonio font-bold">
                      {service.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <svg
                            className="w-5 h-5 mr-3 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="flex items-center text-black group-hover:text-[#0558F9] transition-colors font-semibold">
                      <span className="mr-2">Learn More</span>
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-black mb-12 text-center">
            Why Choose Zenit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Experienced developers with deep expertise in modern technologies and best practices.'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored solutions designed specifically for your business needs and goals.'
              },
              {
                title: 'Ongoing Support',
                description: 'Continuous support and maintenance to ensure your digital products stay cutting-edge.'
              }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-2xl font-antonio font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-white mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch to discuss your project and discover how we can help
          </p>
          <Link href="/ContactPage">
            <button className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
