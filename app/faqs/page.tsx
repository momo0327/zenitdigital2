'use client'
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import { FAQ_ITEMS } from '../constants/content';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = FAQ_ITEMS;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-antonio font-bold text-black mb-8">
            FAQs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Straight answers to the questions we hear most. Anything missing — drop us a note.
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
                className="bg-white rounded-xl 2xl:rounded-2xl overflow-hidden border-2 border-transparent hover:border-black transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="text-xl md:text-2xl font-antonio font-bold text-black transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 group-hover:text-black transition-all duration-300 flex-shrink-0 ${
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

      <Cta />
      <Footer />
    </div>
  );
}
