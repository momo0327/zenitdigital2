'use client'
import React from 'react';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const menuItems = [
    { label: 'Platform', ariaLabel: 'Go to platform page', link: '/platform' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Explore', ariaLabel: 'Explore our features', link: '/explore' },
    { label: 'Demo', ariaLabel: 'Try our demo', link: '/demo' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white px-6 py-5 fixed top-0 left-0 right-0 z-60">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-xl font-bold text-black cursor-pointer">
            ZENIT
          </div>

          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden sm:flex space-x-2 md:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button className="text-gray-700 hover:text-black px-2 md:px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200 text-sm md:text-base">
              Platform
            </button>
            <button className="text-gray-700 hover:text-black px-2 md:px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200 text-sm md:text-base">
              About
            </button>
            <button className="text-gray-700 hover:text-black px-2 md:px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200 text-sm md:text-base">
              Explore
            </button>
          </div>

          {/* Right side - StaggeredMenu */}
          <div className="flex items-center">
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
          top: 20px !important;
          right: 24px !important;
          left: auto !important;
          width: auto !important;
          padding: 0 !important;
          pointer-events: all;
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
          order: 2 !important;
          margin-left: 0.3rem !important;
        }


    .sm-panel-item {
          font-family: 'Antonio', sans-serif !important;
        }

      `}</style>
    </>
  );
};

export default Navbar;
