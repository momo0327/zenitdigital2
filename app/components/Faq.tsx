'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

const FAQ: React.FC<FAQProps> = ({
  bgColor = 'bg-[#120128]',
  textColor = 'text-[#BEA1FC]',
  borderColor = 'border-[#BEA1FC]/20'
}) => {
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

  // Extract just the color value from the text color class
  const textColorValue = textColor.replace('text-', '');
  const opacityTextColor = `text-${textColorValue}/70`;

  return (
    <div className="bg-white py-16 md:py-20 lg:py-62 2xl:py-72">
      <div className="mx-auto px-5 md:px-12 lg:px-16 2xl:px-16 max-w-7xl 2xl:max-w-[2400px]">
        {/* Modal-like Container */}
        <div className={`${bgColor} rounded-xl 2xl:rounded-2xl p-8 md:p-12 lg:p-16 2xl:p-20 py-20 2xl:py-28 shadow-2xl`}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 2xl:gap-24">
            {/* Left Side - Title */}
            <div className="lg:w-1/3 text-center md:text-left">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold font-antonio ${textColor} leading-tight`}>
                Frequently <br className='2xl:block hidden' />
                Asked<br />
                Questions
              </h2>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="lg:w-2/3 space-y-4 2xl:space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b ${borderColor} pb-4 2xl:pb-6`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left group py-2 2xl:py-3"
                  >
                    <span className={`${textColor} text-base md:text-lg 2xl:text-2xl font-medium pr-4 2xl:pr-6`}>
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className={`w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${textColor}`} />
                      ) : (
                        <Plus className={`w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8 ${textColor}`} />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className={`mt-3 2xl:mt-5 ${opacityTextColor} text-sm md:text-base 2xl:text-xl leading-relaxed animate-fadeIn`}>
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