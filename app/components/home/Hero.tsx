'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '../../utils/image';
import { MARKETING_COPY } from '@/app/constants/content';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Title positioned at the very top */}
        <div className={styles.titleArea}>
          <h1 className={styles.heading}>
            <div
              className={styles.fadeUp}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0ms'
              }}
            >
              WE DEVELOP
            </div>
            <div
              className={styles.fadeUp}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms'
              }}
            >
              YOUR DREAMS.
            </div>
          </h1>

          {/* Mobile subtitle and buttons */}
          <div className={styles.mobileSubtitle}>
            <p
              className={`${styles.mobileTagline} ${styles.fadeUp}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '400ms'
              }}
            >
              {MARKETING_COPY.tagline}
            </p>
            <div
              className={`${styles.mobileButtons} ${styles.fadeUp}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '600ms'
              }}
            >
              <Link href='/services' className={styles.btnPrimary}>Explore</Link>
              <Link href='/ContactPage' className={styles.btnOutline}>Contact</Link>
            </div>
          </div>
        </div>

        {/* Image positioned below with fade up animation */}
        <div
          className={`${styles.imageWrapper} ${styles.fadeUp}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transitionDelay: '400ms'
          }}
        >
          <OptimizedImage
            src="/phoneHeader.png"
            alt="Zenit Digital mobile app development showcase with modern interface design"
            width={700}
            height={800}
            className={styles.heroImage}
            priority
            quality={IMAGE_QUALITY.HIGH}
            enableBlur
          />
        </div>

        {/* Desktop subtitle and buttons - Absolutely positioned on the right */}
        <div
          className={`${styles.desktopSubtitle} ${styles.fadeUp}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transitionDelay: '600ms'
          }}
        >
          <p className={styles.desktopTagline}>
            {MARKETING_COPY.tagline}
          </p>
          <div className={styles.desktopButtons}>
            <Link href='/services' className={styles.btnPrimaryDesktop}>
              Explore
            </Link>
            <Link href='/ContactPage' className={styles.btnOutlineDesktop}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
