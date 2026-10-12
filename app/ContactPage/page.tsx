import React from 'react';
import Navbar from '../components/navbar';
import { Mail, Phone, MapPin } from 'lucide-react';
import Steps from '../components/Steps';
import Footer from '../components/Footer';


export default function ContactPage() {
  return (
    <>
      <Navbar
        bgColor="bg-black"
        textColor="text-white"
        logoColor="text-white"
        hoverBgColor="hover:bg-white/10"
        logoSrc="/zeniaWhite.png"
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
      />
      <div className="relative overflow-hidden min-h-screen bg-black flex items-center justify-center px-[clamp(1.5rem,5vw,5rem)] py-[clamp(6rem,10vw,9rem)]">

        {/* Dot grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.09) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse at center, black 35%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 35%, transparent 80%)',
          }}
        />

        {/* Ambient brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(154,194,255,0.13), transparent 70%)',
          }}
        />

        <div className="relative z-10 w-full max-w-[60rem] text-center">
          <h1 className="font-antonio font-bold text-white leading-[0.95] mb-[clamp(1.75rem,2.5vw,2.75rem)] text-[clamp(4rem,9vw,9.5rem)]">
            LET&apos;S MAKE <br /> IT HAPPEN
          </h1>

          <p className="text-white/70 leading-relaxed mb-[clamp(2.5rem,4vw,4rem)] text-[clamp(1rem,0.5vw+0.875rem,1.25rem)] max-w-[36rem] mx-auto">
            Ready to transform your ideas into reality? Get in touch and let&apos;s start building something amazing together.
          </p>

          {/* Contact Info */}
          <div className="bg-[#F5F5F5]/5 border border-white/10 rounded-2xl p-[clamp(1.5rem,2vw,2.5rem)] space-y-7 md:space-y-[clamp(0.875rem,1.25vw,1.5rem)] text-left max-w-[40rem] mx-auto">
            {/* Email */}
            <a
              href="mailto:hello@zeniadigital.se"
              className="flex items-center gap-[clamp(0.75rem,1vw,1.25rem)] group"
            >
              <div className="bg-[#F5F5F5] p-[clamp(0.5rem,0.7vw,0.75rem)] rounded-full flex-shrink-0">
                <Mail className="size-[clamp(1rem,1.2vw,1.5rem)] text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-white/50 mb-[clamp(0.05rem,0.1vw,0.25rem)] text-[clamp(0.7rem,0.3vw+0.625rem,0.875rem)]">Email</p>
                <p className="text-white font-medium group-hover:underline text-[clamp(0.875rem,0.5vw+0.75rem,1.125rem)]">
                  hello@zeniadigital.se
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+46723364384"
              className="flex items-center gap-[clamp(0.75rem,1vw,1.25rem)] group"
            >
              <div className="bg-[#F5F5F5] p-[clamp(0.5rem,0.7vw,0.75rem)] rounded-full flex-shrink-0">
                <Phone className="size-[clamp(1rem,1.2vw,1.5rem)] text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-white/50 mb-[clamp(0.05rem,0.1vw,0.25rem)] text-[clamp(0.7rem,0.3vw+0.625rem,0.875rem)]">Phone</p>
                <p className="text-white font-medium group-hover:underline text-[clamp(0.875rem,0.5vw+0.75rem,1.125rem)]">
                  +46 72-336 43 84
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-[clamp(0.75rem,1vw,1.25rem)]">
              <div className="bg-[#F5F5F5] p-[clamp(0.5rem,0.7vw,0.75rem)] rounded-full flex-shrink-0">
                <MapPin className="size-[clamp(1rem,1.2vw,1.5rem)] text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-white/50 mb-[clamp(0.05rem,0.1vw,0.25rem)] text-[clamp(0.7rem,0.3vw+0.625rem,0.875rem)]">Location</p>
                <p className="text-white font-medium text-[clamp(0.875rem,0.5vw+0.75rem,1.125rem)]">
                  Gothenburg, Sweden
                </p>
              </div>
            </div>
          </div>

          <p className="text-white/50 mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.8rem,0.3vw+0.7rem,0.95rem)]">
            Replies within 24 hours.
          </p>
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
      <Footer />
    </>
  );
}
