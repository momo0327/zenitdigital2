'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaggeredMenu from './StaggeredMenu/index';
import { useBreakpoint } from '@/app/hooks/useMediaQuery';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  bgColor?: string;
  textColor?: string;
  logoColor?: string;
  hoverBgColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  bgColor = 'bg-white',
  textColor = 'text-black',
  logoColor = 'text-black',
  hoverBgColor = 'hover:bg-gray-100'
}) => {
  const { isMobile } = useBreakpoint();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only apply scroll behavior on larger devices (desktop)
      if (window.innerWidth >= 1024) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always visible on smaller devices
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Services', ariaLabel: 'Explore our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch with us', link: '/ContactPage' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`${bgColor} px-5 py-5 sm:px-6 2xl:px-10 2xl:py-7 fixed left-0 right-0 z-60 transition-transform duration-300 ease-in-out ${
        isVisible ? 'top-0 translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex items-center justify-between max-w-7xl 2xl:max-w-[1600px] mx-auto">
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2 2xl:gap-3 text-xl 2xl:text-3xl font-bold ${logoColor} cursor-pointer`}>
            <Image
              src="/ZenitLogo.png"
              alt="Zenit Digital Logo"
              width={32}
              height={32}
              className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8"
              priority
            />
            ZENIA
          </Link>

          {/* Center Navigation - Responsive with useBreakpoint */}
          {!isMobile && (
            <div className="flex space-x-2 md:space-x-8 2xl:space-x-12 absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className={`${textColor} opacity-70 hover:opacity-100 px-2 md:px-4 2xl:px-6 py-2 2xl:py-3 rounded-md ${hoverBgColor} transition-all duration-200 text-sm md:text-base 2xl:text-xl cursor-pointer`}>
                Home
              </Link>
              <Link href="/services" className={`${textColor} opacity-70 hover:opacity-100 px-2 md:px-4 2xl:px-6 py-2 2xl:py-3 rounded-md ${hoverBgColor} transition-all duration-200 text-sm md:text-base 2xl:text-xl cursor-pointer`}>
                Services
              </Link>
              <Link href="/#faq" className={`${textColor} opacity-70 hover:opacity-100 px-2 md:px-4 2xl:px-6 py-2 2xl:py-3 rounded-md ${hoverBgColor} transition-all duration-200 text-sm md:text-base 2xl:text-xl cursor-pointer`}>
                FAQ
              </Link>
            </div>
          )}

          {/* Right side - StaggeredMenu (only on mobile/tablet) */}
          <div className="flex items-center lg:hidden">
            <div className="w-auto h-auto">
              <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#000"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={false}
                colors={['#B19EEF', '#5227FF']}
                logoUrl="/logowhite.png"
                accentColor="blue"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
              />
            </div>
          </div>

          {/* Right side - Let's Talk button (only on desktop) */}
          <div className="hidden lg:flex items-center">
            <Link href="/ContactPage" className="group relative bg-black text-white px-6 py-2.5 2xl:px-8 2xl:py-3.5 rounded-full overflow-hidden transition-all duration-300 text-base 2xl:text-xl font-medium flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105 z-10">
              <span className="absolute inset-0 bg-[#D5EA9D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full -z-10"></span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Let&apos;s Talk</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 2xl:w-5 2xl:h-5 transition-all duration-500 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Styles to make StaggeredMenu work properly in navbar */}
      <style jsx global>{`
        .staggered-menu-wrapper {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 9999 !important;
          pointer-events: none;
        }

        .staggered-menu-wrapper[data-open="true"] {
          pointer-events: all;
        }

        .staggered-menu-header {
          position: absolute !important;
          top: 27px !important;
          right: 20px !important;
          left: auto !important;
          width: auto !important;
          padding: 0 !important;
          pointer-events: all;
          display: flex !important;
          align-items: center !important;
        }

        @media (min-width: 640px) {
          .staggered-menu-header {
            right: 24px !important;
            top: 30px !important;
          }
        }

        @media (min-width: 1536px) {
          .staggered-menu-header {
            top: 30px !important;
          }
        }

        .sm-logo {
          display: none !important;
        }

        .sm-toggle {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #000 !important;
          gap: 0.3rem !important;
        }

        .sm-toggle-textWrap {
          position: relative !important;
          display: inline-block !important;
          height: 1em !important;
          overflow: hidden !important;
          line-height: 1 !important;
          width: auto !important;
          min-width: auto !important;
          white-space: nowrap !important;
        }

        .sm-toggle-textInner {
          display: flex !important;
          flex-direction: column !important;
          line-height: 1 !important;
        }

        .sm-toggle-line {
          display: block !important;
          height: 1em !important;
          line-height: 1 !important;
        }

        .sm-icon {
          display: inline-flex !important;
          order: 2 !important;
          margin-left: 0.3rem !important;
          width: 14px !important;
          height: 14px !important;
          position: relative !important;
        }

        .sm-icon-line {
          display: block !important;
          position: absolute !important;
          background: currentColor !important;
          border-radius: 2px !important;
        }

        .sm-panel-item {
          font-family: 'Antonio', sans-serif !important;
        }

      `}</style>
    </>
  );
};

export default Navbar;
