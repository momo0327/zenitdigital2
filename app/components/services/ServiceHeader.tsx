import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '../../utils/image';
import styles from './ServiceHeader.module.css';

type Service = 'web' | 'mobile' | 'fullstack';

interface ServiceHeaderProps {
  title: React.ReactNode;
  imageAlt: string;
  service: Service;
}

const themeVars: Record<Service, Record<string, string>> = {
  web: {
    '--_accent': 'var(--color-web)',
    '--_bg': 'var(--bg-web)',
    '--_btn-text': '#120128',
  },
  mobile: {
    '--_accent': 'var(--color-mobile)',
    '--_bg': 'var(--bg-mobile)',
    '--_btn-text': '#120128',
  },
  fullstack: {
    '--_accent': 'var(--color-fullstack-blue)',
    '--_bg': 'var(--bg-fullstack-page)',
    '--_btn-text': 'var(--ui-white)',
  },
};

const ServiceHeader = ({ title, imageAlt, service }: ServiceHeaderProps) => {
  return (
    <div
      className={styles.wrapper}
      style={themeVars[service] as React.CSSProperties}
    >
      <div className={styles.card}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {title}
            </h1>

            <p className={styles.description}>
              The way we work has changed, but learning software hasnt.
            </p>

            <div className={styles.actions}>
              <Link href="/ContactPage">
                <button className={styles.primaryButton}>
                  Get Started
                </button>
              </Link>
              <Link href="/ContactPage">
                <button className={styles.secondaryButton}>
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.imageSection}>
            <OptimizedImage
              src="/Group 6-3.png"
              alt={imageAlt}
              width={675}
              height={879}
              className={styles.image}
              priority
              quality={IMAGE_QUALITY.MAX}
              enableBlur
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
