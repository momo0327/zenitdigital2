'use client'
import React from 'react';
import Link from 'next/link';
import styles from './Navbar2.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/zenit/services' },
  { label: 'Contact', href: '/ContactPage' },
] as const;

const Navbar2: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Wordmark */}
        <Link href="/" className={styles.wordmark}>
          ZENIA
        </Link>

        {/* Center Navigation */}
        <div className={styles.links}>
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/ContactPage" className={styles.cta}>
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
