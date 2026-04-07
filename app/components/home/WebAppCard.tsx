import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '../../utils/image';
import styles from './WebAppCard.module.css';

const WebAppCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          {/* Left side - Content */}
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Web App Development
            </h2>
            <p className={styles.description}>
              The way we work has changed, but learning software hasnt.
            </p>
            <div className={styles.actions}>
              <Link href="/services">
                <button className={styles.primaryButton}>
                  Explore
                </button>
              </Link>
              <Link href="/ContactPage">
                <button className={styles.secondaryButton}>
                  Contact
                </button>
              </Link>
            </div>
          </div>

          {/* Right side - Phone Image */}
          <div className={styles.imageSection}>
            <OptimizedImage
              src="/ipadred.png"
              alt="Web development services - Responsive website design and modern web applications"
              width={584}
              height={400}
              className={styles.image}
              quality={IMAGE_QUALITY.HIGH}
              enableBlur
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppCard;
