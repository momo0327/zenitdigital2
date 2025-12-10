import React from 'react';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/navbar';
import { Mail, Phone, MapPin } from 'lucide-react';
import Steps from '../components/Steps';

export default function ContactPage() {
  return (
    <>
      <Navbar
        bgColor="bg-[#9AC2FF]"
        textColor="text-[#0A0D24]"
        logoColor="text-[#0A0D24]"
        hoverBgColor="hover:bg-[#0A0D24]/10"
      />
      <div className="min-h-screen bg-[#9AC2FF]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Content */}
          <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 2xl:px-24 py-24 lg:py-32 2xl:py-40">
            <div className="max-w-xl 2xl:max-w-3xl w-full">
              <h1 className="text-8xl md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-[12rem] font-antonio font-bold text-[#0A0D24] text-center lg:text-left leading-none mb-8 2xl:mb-12">
                LET&apos;S MAKE <br /> IT HAPPEN
              </h1>

              <div className="space-y-6 2xl:space-y-10 text-[#0A0D24]/80 text-center lg:text-left text-base md:text-lg 2xl:text-2xl leading-relaxed mb-10 2xl:mb-14">
                <p>
                  Ready to transform your ideas into reality? Get in touch with us and let&apos;s start building something amazing together.
                </p>

                <p className="font-medium text-[#0A0D24]">
                  Fill out the form, and we&apos;ll get back to you within 24 hours!
                </p>
              </div>

              {/* Contact Info Container */}
              <div className="bg-[#74a4e6] rounded-xl 2xl:rounded-2xl p-5 2xl:p-8 space-y-3 2xl:space-y-5">
                {/* Email */}
                <div className="flex items-center gap-3 2xl:gap-5">
                  <div className="bg-[#0A0D24] p-2 2xl:p-3 rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 2xl:w-6 2xl:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs 2xl:text-base text-[#0A0D24]/60 mb-0.5">Email</p>
                    <a
                      href="mailto:info@zenitdigital.se"
                      className="text-[#0A0D24] text-sm 2xl:text-xl font-medium hover:underline"
                    >
                      info@zenitdigital.se
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 2xl:gap-5">
                  <div className="bg-[#0A0D24] p-2 2xl:p-3 rounded-full flex-shrink-0">
                    <Phone className="w-4 h-4 2xl:w-6 2xl:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs 2xl:text-base text-[#0A0D24]/60 mb-0.5">Phone</p>
                    <a
                      href="tel:+46123456789"
                      className="text-[#0A0D24] text-sm 2xl:text-xl font-medium hover:underline"
                    >
                      +46 123 456 789
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 2xl:gap-5">
                  <div className="bg-[#0A0D24] p-2 2xl:p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 2xl:w-6 2xl:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs 2xl:text-base text-[#0A0D24]/60 mb-0.5">Location</p>
                    <p className="text-[#0A0D24] text-sm 2xl:text-xl font-medium">
                      Stockholm, Sweden
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 2xl:px-24 mb-12 lg:py-32 2xl:py-40">
            <div className="w-full max-w-lg 2xl:max-w-4xl">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

      {/* Steps Component with White/Light Gray Theme */}
      <Steps
        bgColor="bg-white"
        titleColor="text-[#0A0D24]"
        subtitleColor="text-[#0A0D24]/70"
        cardBgColor="bg-[#F4F4F4]"
        cardTextColor="text-[#0A0D24]"
        iconBgColor="bg-[#0A0D24]/10"
        iconColor="text-[#0A0D24]"
      />
    </>
  );
}
