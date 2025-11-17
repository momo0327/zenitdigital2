'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does Zenit Digital offer?',
      answer: 'We specialize in three core areas: Web Development (responsive websites and web applications), Mobile Development (native iOS and Android apps), and Fullstack Development (complete end-to-end solutions from frontend to backend and deployment).'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web or mobile application could take 2-6 months. We provide detailed timelines during the project planning phase.'
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Launch & Deployment, and 5) Ongoing Support & Maintenance. We keep you involved at every stage with regular updates and feedback sessions.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer various maintenance and support packages to ensure your digital products stay up-to-date, secure, and performing optimally. This includes bug fixes, updates, and feature enhancements.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, React Native, and various databases and cloud platforms. We choose the best technology stack based on your specific project requirements.'
    },
    {
      question: 'How much does a project cost?',
      answer: 'Project costs vary significantly based on scope, complexity, and requirements. We provide custom quotes after understanding your needs. Contact us for a free consultation and personalized estimate.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! While we\'re based in Sweden, we work with clients worldwide. We\'re experienced in remote collaboration and can accommodate different time zones and communication preferences.'
    },
    {
      question: 'Can you help with an existing project?',
      answer: 'Yes, we can take over existing projects, provide code reviews, refactor legacy code, or add new features to your current applications. We\'re flexible and can adapt to your needs.'
    },
    {
      question: 'What makes Zenit Digital different?',
      answer: 'We combine technical excellence with creative design thinking. Our focus is on building products that not only look great but also deliver real business value. We\'re partners in your success, not just service providers.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply reach out through our contact page! We\'ll schedule a free 30-minute discovery call to discuss your project, understand your goals, and explore how we can help bring your vision to life.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-antonio font-bold text-black mb-8">
            FAQs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Got questions? We&apos;ve got answers. Find everything you need to know about working with Zenit Digital.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#0558F9] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="text-xl md:text-2xl font-antonio font-bold text-black group-hover:text-[#0558F9] transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 group-hover:text-[#0558F9] transition-all duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-antonio font-bold text-black mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re here to help! Get in touch and we&apos;ll answer any questions you have.
          </p>
          <Link href="/ContactPage">
            <button className="px-8 py-4 bg-[#0558F9] text-white font-semibold text-lg rounded-full hover:bg-[#0558F9]/90 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-antonio font-bold text-black mb-8 text-center">
            Explore Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Web Development', href: '/WebDev', color: 'from-[#FF5147] to-[#FF7B73]' },
              { title: 'Mobile Development', href: '/MobileDev', color: 'from-[#BEA1FC] to-[#D4C3FF]' },
              { title: 'Fullstack Development', href: '/FullstackDev', color: 'from-[#0558F9] to-[#4A8BFF]' }
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block"
              >
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <h4 className="text-2xl font-antonio font-bold mb-2">
                    {service.title}
                  </h4>
                  <div className="flex items-center text-white/90 group-hover:text-white">
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
