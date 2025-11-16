/**
 * SEO Constants
 *
 * Centralized SEO metadata and configuration for Zenit Digital
 * Includes default metadata, Open Graph, Twitter cards, and page-specific SEO
 */

import { Metadata } from 'next';
import { COMPANY, SEO_KEYWORDS } from './content';

// Base URL - Update this when deploying to production
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zenitdigital.com';

// Default Site Metadata
export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Digital Excellence`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ['/twitter-image.png'],
    creator: '@zenitdigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

// Home Page Metadata
export const HOME_METADATA: Metadata = {
  title: 'Home',
  description: `${COMPANY.name} - We build exceptional digital products including web applications, mobile apps, and fullstack solutions. Transform your business with cutting-edge technology.`,
  openGraph: {
    title: `${COMPANY.name} | Modern Digital Solutions`,
    description: 'Transform your business with cutting-edge web and mobile development',
    url: BASE_URL,
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Homepage`,
      },
    ],
  },
};

// Web Development Page Metadata
export const WEB_DEV_METADATA: Metadata = {
  title: 'Web Development Services',
  description: 'Custom web application development with Next.js, React, and TypeScript. Build fast, scalable, and SEO-optimized websites with Zenit Digital.',
  keywords: [
    'web development',
    'Next.js development',
    'React development',
    'custom web applications',
    'responsive web design',
    'TypeScript development',
  ],
  openGraph: {
    title: 'Web Development | Zenit Digital',
    description: 'Build fast, scalable web applications with modern technologies',
    url: `${BASE_URL}/WebDev`,
    images: [
      {
        url: '/og-web-dev.png',
        width: 1200,
        height: 630,
        alt: 'Zenit Digital Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development | Zenit Digital',
    description: 'Build fast, scalable web applications with modern technologies',
  },
};

// Mobile Development Page Metadata
export const MOBILE_DEV_METADATA: Metadata = {
  title: 'Mobile App Development Services',
  description: 'Native iOS and Android app development. Create engaging mobile experiences with React Native and native technologies. Cross-platform or native solutions.',
  keywords: [
    'mobile app development',
    'iOS development',
    'Android development',
    'React Native',
    'cross-platform apps',
    'native mobile apps',
  ],
  openGraph: {
    title: 'Mobile Development | Zenit Digital',
    description: 'Build native iOS and Android applications that users love',
    url: `${BASE_URL}/MobileDev`,
    images: [
      {
        url: '/og-mobile-dev.png',
        width: 1200,
        height: 630,
        alt: 'Zenit Digital Mobile Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Development | Zenit Digital',
    description: 'Build native iOS and Android applications that users love',
  },
};

// Fullstack Development Page Metadata
export const FULLSTACK_DEV_METADATA: Metadata = {
  title: 'Fullstack Development Services',
  description: 'End-to-end fullstack development services. From frontend to backend, database to deployment. Complete digital solutions built by expert developers.',
  keywords: [
    'fullstack development',
    'backend development',
    'API development',
    'database design',
    'cloud deployment',
    'full stack developer',
  ],
  openGraph: {
    title: 'Fullstack Development | Zenit Digital',
    description: 'Complete end-to-end development solutions for your business',
    url: `${BASE_URL}/FullstackDev`,
    images: [
      {
        url: '/og-fullstack-dev.png',
        width: 1200,
        height: 630,
        alt: 'Zenit Digital Fullstack Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fullstack Development | Zenit Digital',
    description: 'Complete end-to-end development solutions for your business',
  },
};

// Contact Page Metadata
export const CONTACT_METADATA: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${COMPANY.name}. Let's discuss your project and how we can help bring your digital vision to life. Email us at ${COMPANY.email} or call ${COMPANY.phone}.`,
  keywords: [
    'contact',
    'get in touch',
    'project inquiry',
    'digital agency contact',
  ],
  openGraph: {
    title: 'Contact Us | Zenit Digital',
    description: "Let's discuss your next digital project",
    url: `${BASE_URL}/ContactPage`,
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Zenit Digital',
    description: "Let's discuss your next digital project",
  },
};

// About Page Metadata (for future use)
export const ABOUT_METADATA: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY.name} - our team, values, and approach to building exceptional digital products. We're passionate about technology and dedicated to your success.`,
  openGraph: {
    title: 'About Us | Zenit Digital',
    description: 'Meet the team behind exceptional digital products',
    url: `${BASE_URL}/about`,
  },
};

// Structured Data - Organization Schema
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: COMPANY.description,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: [
    'https://linkedin.com/company/zenitdigital',
    'https://twitter.com/zenitdigital',
    'https://github.com/zenitdigital',
  ],
};

// Structured Data - Service Schema Generator
export const generateServiceSchema = (serviceName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'Organization',
    name: COMPANY.name,
    url: BASE_URL,
  },
  description,
  areaServed: 'Worldwide',
});

// Helper function to merge metadata
export const mergeMetadata = (override: Metadata): Metadata => ({
  ...DEFAULT_METADATA,
  ...override,
});
