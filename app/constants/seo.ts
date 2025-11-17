/**
 * SEO Constants
 *
 * Centralized SEO metadata and configuration for Zenit Digital
 * Optimized for Swedish market visibility and international reach
 * Includes default metadata, Open Graph, Twitter cards, structured data, and page-specific SEO
 */

import { Metadata } from 'next';
import { COMPANY, SEO_KEYWORDS } from './content';

// Base URL - Update this when deploying to production
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zenitdigital.com';

// Swedish Market Information
export const SWEDISH_MARKET = {
  country: 'Sweden',
  countryCode: 'SE',
  locale: 'sv_SE',
  language: 'sv',
  city: 'Stockholm',
  region: 'Stockholm County',
  timezone: 'Europe/Stockholm',
  currency: 'SEK',
} as const;

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
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': BASE_URL,
      'sv-SE': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
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
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zenitdigital',
    creator: '@zenitdigital',
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  category: 'technology',
};

// Home Page Metadata
export const HOME_METADATA: Metadata = {
  title: 'Digital Byrå Stockholm | Webbutveckling & Apputveckling',
  description: `${COMPANY.name} - Leading digital agency in Stockholm, Sweden. We build exceptional web applications, mobile apps, and fullstack solutions. Expert developers delivering cutting-edge digital products for Swedish businesses.`,
  keywords: [
    'digital byrå Stockholm',
    'webbutveckling Sverige',
    'apputveckling Stockholm',
    'fullstack utvecklare Sverige',
    'Next.js utveckling Stockholm',
    'React utvecklare Sverige',
    'mobilapputveckling Stockholm',
    'webbyrå Stockholm',
    'digital agency Sweden',
    'web development Stockholm',
    'app development Sweden',
  ],
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': BASE_URL,
      'sv-SE': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    title: `${COMPANY.name} | Modern Digital Solutions in Stockholm`,
    description: 'Transform your business with cutting-edge web and mobile development from Sweden\'s leading digital agency',
    url: BASE_URL,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Digital Agency Stockholm`,
        type: 'image/png',
      },
    ],
  },
};

// Web Development Page Metadata
export const WEB_DEV_METADATA: Metadata = {
  title: 'Webbutveckling Stockholm | Next.js & React Development',
  description: 'Professional web development services in Stockholm. Custom web applications with Next.js, React, and TypeScript. Build fast, scalable, SEO-optimized websites. Expert Swedish web developers.',
  keywords: [
    'webbutveckling Stockholm',
    'webbapplikation utveckling',
    'Next.js utvecklare Sverige',
    'React utveckling Stockholm',
    'TypeScript webbutveckling',
    'responsiv webbdesign',
    'SEO-optimerad hemsida',
    'web development Stockholm',
    'custom web applications Sweden',
    'responsive web design Sweden',
    'e-handel utveckling',
  ],
  alternates: {
    canonical: `${BASE_URL}/WebDev`,
    languages: {
      'en': `${BASE_URL}/WebDev`,
      'sv-SE': `${BASE_URL}/WebDev`,
      'x-default': `${BASE_URL}/WebDev`,
    },
  },
  openGraph: {
    title: 'Web Development Stockholm | Zenit Digital',
    description: 'Build fast, scalable web applications with modern technologies. Expert web development in Sweden.',
    url: `${BASE_URL}/WebDev`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
    images: [
      {
        url: '/og-web-dev.png',
        width: 1200,
        height: 630,
        alt: 'Zenit Digital Web Development Services Stockholm',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zenitdigital',
    title: 'Web Development Stockholm | Zenit Digital',
    description: 'Build fast, scalable web applications with modern technologies',
  },
};

// Mobile Development Page Metadata
export const MOBILE_DEV_METADATA: Metadata = {
  title: 'Apputveckling Stockholm | iOS & Android App Development',
  description: 'Professional mobile app development in Stockholm. Native iOS and Android apps, React Native cross-platform solutions. Expert Swedish mobile developers creating engaging user experiences.',
  keywords: [
    'apputveckling Stockholm',
    'mobilapp utveckling Sverige',
    'iOS utvecklare Stockholm',
    'Android utveckling Sverige',
    'React Native utvecklare',
    'native app utveckling',
    'cross-platform appar',
    'mobile app development Stockholm',
    'iPhone app utveckling',
    'Android app Sverige',
    'app design Stockholm',
  ],
  alternates: {
    canonical: `${BASE_URL}/MobileDev`,
    languages: {
      'en': `${BASE_URL}/MobileDev`,
      'sv-SE': `${BASE_URL}/MobileDev`,
      'x-default': `${BASE_URL}/MobileDev`,
    },
  },
  openGraph: {
    title: 'Mobile App Development Stockholm | Zenit Digital',
    description: 'Build native iOS and Android applications that users love. Expert mobile development in Sweden.',
    url: `${BASE_URL}/MobileDev`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
    images: [
      {
        url: '/og-mobile-dev.png',
        width: 1200,
        height: 630,
        alt: 'Zenit Digital Mobile App Development Services Stockholm',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zenitdigital',
    title: 'Mobile App Development Stockholm | Zenit Digital',
    description: 'Build native iOS and Android applications that users love',
  },
};

// Fullstack Development Page Metadata
export const FULLSTACK_DEV_METADATA: Metadata = {
  title: 'Fullstack Utveckling Stockholm | Backend & Frontend Development',
  description: 'Complete fullstack development services in Stockholm. End-to-end solutions from frontend to backend, database to cloud deployment. Expert Swedish fullstack developers.',
  keywords: [
    'fullstack utvecklare Stockholm',
    'backend utveckling Sverige',
    'API utveckling Stockholm',
    'databasdesign Sverige',
    'cloud deployment Sweden',
    'Node.js utvecklare Stockholm',
    'fullstack development Stockholm',
    'backend developer Sweden',
    'cloud architecture Sverige',
    'DevOps Stockholm',
    'serverless utveckling',
  ],
  alternates: {
    canonical: `${BASE_URL}/FullstackDev`,
    languages: {
      'en': `${BASE_URL}/FullstackDev`,
      'sv-SE': `${BASE_URL}/FullstackDev`,
      'x-default': `${BASE_URL}/FullstackDev`,
    },
  },
  openGraph: {
    title: 'Fullstack Development Stockholm | Zenit Digital',
    description: 'Complete end-to-end development solutions for your business. Expert fullstack development in Sweden.',
    url: `${BASE_URL}/FullstackDev`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
    images: [
      {
        url: '/og-fullstack-dev.png',
        width: 1200,
        height: 630,
        alt: 'Zenit Digital Fullstack Development Services Stockholm',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zenitdigital',
    title: 'Fullstack Development Stockholm | Zenit Digital',
    description: 'Complete end-to-end development solutions for your business',
  },
};

// Contact Page Metadata
export const CONTACT_METADATA: Metadata = {
  title: 'Kontakta Oss | Digital Byrå Stockholm',
  description: `Contact ${COMPANY.name} in Stockholm, Sweden. Let's discuss your digital project - web development, app development, or fullstack solutions. Email: ${COMPANY.email} | Phone: ${COMPANY.phone}`,
  keywords: [
    'kontakta digital byrå',
    'webbyrå Stockholm kontakt',
    'offert webbutveckling',
    'digital agency contact Stockholm',
    'project inquiry Sweden',
    'kostnadsfri konsultation',
  ],
  alternates: {
    canonical: `${BASE_URL}/ContactPage`,
    languages: {
      'en': `${BASE_URL}/ContactPage`,
      'sv-SE': `${BASE_URL}/ContactPage`,
      'x-default': `${BASE_URL}/ContactPage`,
    },
  },
  openGraph: {
    title: 'Contact Us | Zenit Digital Stockholm',
    description: "Let's discuss your next digital project. Professional web and app development in Sweden.",
    url: `${BASE_URL}/ContactPage`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
  },
  twitter: {
    card: 'summary',
    site: '@zenitdigital',
    title: 'Contact Us | Zenit Digital',
    description: "Let's discuss your next digital project",
  },
};

// About Page Metadata (for future use)
export const ABOUT_METADATA: Metadata = {
  title: 'Om Oss | Digital Byrå i Stockholm',
  description: `Learn about ${COMPANY.name} - leading digital agency in Stockholm, Sweden. Our team, values, and approach to building exceptional digital products. Passionate developers dedicated to your success.`,
  keywords: [
    'om oss',
    'digital byrå Stockholm',
    'webbyrå team',
    'about us',
    'Swedish web developers',
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
    languages: {
      'en': `${BASE_URL}/about`,
      'sv-SE': `${BASE_URL}/about`,
      'x-default': `${BASE_URL}/about`,
    },
  },
  openGraph: {
    title: 'About Us | Zenit Digital Stockholm',
    description: 'Meet the team behind exceptional digital products in Sweden',
    url: `${BASE_URL}/about`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sv_SE'],
  },
};

// Structured Data - LocalBusiness Schema (Optimized for Swedish Market)
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: COMPANY.name,
  alternateName: 'Zenit Digital Agency',
  description: 'Leading digital agency in Stockholm, Sweden. Specializing in web development, mobile apps, and fullstack solutions.',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logowhite.png`,
    width: 250,
    height: 60,
  },
  image: `${BASE_URL}/og-image.png`,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  foundingDate: COMPANY.founded,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SWEDISH_MARKET.city,
    addressRegion: SWEDISH_MARKET.region,
    addressCountry: SWEDISH_MARKET.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 59.3293,
    longitude: 18.0686,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Sweden',
    },
    {
      '@type': 'City',
      name: 'Stockholm',
    },
    'Worldwide',
  ],
  sameAs: [
    'https://linkedin.com/company/zenitdigital',
    'https://twitter.com/zenitdigital',
    'https://github.com/zenitdigital',
  ],
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'Fullstack Development',
    'Next.js',
    'React',
    'TypeScript',
    'React Native',
  ],
  slogan: COMPANY.tagline,
};

// Legacy Organization Schema (kept for backwards compatibility)
export const ORGANIZATION_SCHEMA = LOCAL_BUSINESS_SCHEMA;

// Structured Data - Service Schema Generator
export const generateServiceSchema = (serviceName: string, description: string, url?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': url ? `${url}/#service` : undefined,
  serviceType: serviceName,
  name: serviceName,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY.name,
    url: BASE_URL,
  },
  description,
  areaServed: [
    {
      '@type': 'Country',
      name: 'Sweden',
    },
    {
      '@type': 'City',
      name: 'Stockholm',
    },
    'Worldwide',
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceRange: '$$',
  },
});

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// WebPage Schema Generator
export const generateWebPageSchema = (
  name: string,
  description: string,
  url: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}/#webpage`,
  url,
  name,
  description,
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: COMPANY.name,
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  },
  about: {
    '@id': `${BASE_URL}/#organization`,
  },
  inLanguage: ['en', 'sv'],
});

// Helper function to merge metadata
export const mergeMetadata = (override: Metadata): Metadata => ({
  ...DEFAULT_METADATA,
  ...override,
});
