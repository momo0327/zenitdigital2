'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Vad gör era sensorer?",
      answer: "Våra sensorer övervakar och samlar in data från olika miljöer för att ge er värdefull insikt och kontroll över era system."
    },
    {
      question: "Vad är skillnaden mellan era sensorer och andra?",
      answer: "Våra sensorer erbjuder högre precision, längre batteritid och seamless integration med moderna system."
    },
    {
      question: "Vad är leverans tiden för era sensorer?",
      answer: "Standard leveranstid är 3-5 arbetsdagar inom Sverige. Expressleverans finns tillgänglig."
    },
    {
      question: "Har man rätt till retur?",
      answer: "Ja, vi erbjuder 30 dagars öppet köp på alla våra produkter enligt svensk konsumentlagstiftning."
    },
    {
      question: "Har man rätt till ångerrätt?",
      answer: "Ja, du har 14 dagars ångerrätt från det att du mottagit produkten."
    },
    {
      question: "Vad gör era sensorer?",
      answer: "Våra sensorer övervakar och samlar in data från olika miljöer för att ge er värdefull insikt och kontroll över era system."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 md:py-20 lg:py-62">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-1">
        {/* Modal-like Container */}
        <div className="bg-[#120128] rounded-xl p-8 md:p-12 lg:p-16 py-20 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Side - Title */}
            <div className="lg:w-1/3 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-antonio text-[#BEA1FC] leading-tight">
                Frequently
                Asked<br />
                Questions
              </h2>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-[#BEA1FC]/20 pb-4"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left group py-2"
                  >
                    <span className="text-[#BEA1FC] text-base md:text-lg font-medium pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 md:w-6 md:h-6 text-[#BEA1FC]" />
                      ) : (
                        <Plus className="w-5 h-5 md:w-6 md:h-6 text-[#BEA1FC]" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-3 text-[#BEA1FC]/70 text-sm md:text-base leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FAQ;