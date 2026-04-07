import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '../../utils/image';
import styles from './FullstackCard.module.css';

const FullstackCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          {/* Left side - Content */}
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Fullstack Development
            </h2>
            <p className={styles.description}>
              Discover a revolutionary way to learn with our cutting-edge platform that adapts to your pace and style.
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
              src="/sana-learn-1 2.png"
              alt="Fullstack development - Complete end-to-end solutions from frontend to backend infrastructure"
              width={800}
              height={480}
              className={styles.image}
              quality={IMAGE_QUALITY.MAX}
              enableBlur
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullstackCard;
