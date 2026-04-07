import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '../../utils/image';
import styles from './MobileAppCard.module.css';

const MobileAppCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          {/* Left side - Phone Image */}
          <div className={styles.imageSection}>
            <OptimizedImage
              src="/h-3 2.png"
              alt="Mobile app development - iOS and Android native applications with beautiful UI"
              width={256}
              height={300}
              className={styles.image}
              quality={IMAGE_QUALITY.HIGH}
              enableBlur
            />
          </div>

          {/* Right side - Content */}
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Mobile App Development
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
        </div>
      </div>
    </div>
  );
};

export default MobileAppCard;
