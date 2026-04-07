'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import StaggeredMenu from '../StaggeredMenu/index';
import { useBreakpoint } from '@/app/hooks/useMediaQuery';
import { ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';

interface NavbarProps {
  bgColor?: string;
  textColor?: string;
  logoColor?: string;
  hoverBgColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  bgColor = '#ffffff',
  textColor = '#000000',
  logoColor = '#000000',
  hoverBgColor = '#f3f4f6'
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
    <nav
      className={clsx(styles.navbar, isVisible ? styles.visible : styles.hidden)}
      style={{
        '--navbar-bg': bgColor,
        '--navbar-text': textColor,
        '--navbar-logo': logoColor,
        '--navbar-hover-bg': hoverBgColor,
      } as React.CSSProperties}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/ZenitLogo.png"
            alt="Zenit Digital Logo"
            width={32}
            height={32}
            className={styles.logoImage}
            priority
          />
          ZENIA
        </Link>

        {/* Center Navigation - Responsive with useBreakpoint */}
        {!isMobile && (
          <div className={styles.centerNav}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
            <Link href="/#faq" className={styles.navLink}>
              FAQ
            </Link>
          </div>
        )}

        {/* Right side - StaggeredMenu (only on mobile/tablet) */}
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
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
        <div className={styles.ctaWrapper}>
          <Link href="/ContactPage" className={styles.ctaButton}>
            <span className={styles.ctaOverlay}></span>
            <span className={styles.ctaText}>Let&apos;s Talk</span>
            <ArrowUpRight className={styles.ctaIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
