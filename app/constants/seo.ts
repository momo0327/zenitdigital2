/**
 * SEO Constants
 *
 * Centralized SEO metadata and configuration for Zenia Digital
 * Optimized for Swedish market visibility and international reach
 * Includes default metadata, Open Graph, structured data, and page-specific SEO
 */

import { Metadata } from 'next';
import { COMPANY, SEO_KEYWORDS } from './content';

// Base URL - Update this when deploying to production
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zeniadigital.se';

// Swedish Market Information
export const SWEDISH_MARKET = {
  country: 'Sweden',
  countryCode: 'SE',
  locale: 'sv_SE',
  language: 'sv',
  city: 'Göteborg',
  region: 'Västra Götaland',
  timezone: 'Europe/Stockholm',
  currency: 'SEK',
} as const;

// Shared social image. Set on every page explicitly: a page's openGraph object
// replaces its parent's entirely, image included.
const OG_IMAGE = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: `${COMPANY.name}: design and development studio building websites, apps and digital products`,
};

/**
 * Metadata for one page: title, description, its own canonical URL, and
 * Open Graph/Twitter tags that point at that URL.
 */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${BASE_URL}${path}`;
  const socialTitle = title.includes(COMPANY.name) ? title : `${title} | ${COMPANY.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: COMPANY.name,
      url,
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Default Site Metadata. Deliberately no canonical: a page without its own
// would inherit it and tell Google it is a copy of the homepage.
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
    siteName: COMPANY.name,
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    // A static file: an image generated at request time 500s on Cloudflare.
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE.url],
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
  // Icons are static files: app/favicon.ico, app/icon.png, app/apple-icon.png
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  category: 'technology',
};

// Home Page Metadata
export const HOME_METADATA: Metadata = {
  ...pageMetadata(
    `${COMPANY.name} | Web & App Development in Sweden`,
    `${COMPANY.name} is a design and development studio in Gothenburg, Sweden. We design and build websites, mobile apps and full-stack platforms.`,
    '',
  ),
  keywords: [
    'digital byrå Sverige',
    'webbutveckling Sverige',
    'apputveckling Sverige',
    'fullstack utvecklare Sverige',
    'Next.js utveckling Sverige',
    'React utvecklare Sverige',
    'mobilapputveckling Sverige',
    'webbyrå Sverige',
    'digital agency Sweden',
    'web development Sweden',
    'app development Sweden',
  ],
};

// Web Development Page Metadata
export const WEB_DEV_METADATA: Metadata = {
  ...pageMetadata(
    'Webbutveckling Sverige | Next.js & React Development',
    'Web development in Sweden: custom web applications built with Next.js, React and TypeScript. Fast, scalable, SEO-friendly websites.',
    '/WebDev',
  ),
  keywords: [
    'webbutveckling Sverige',
    'webbapplikation utveckling',
    'Next.js utvecklare Sverige',
    'React utveckling Sverige',
    'TypeScript webbutveckling',
    'responsiv webbdesign',
    'SEO-optimerad hemsida',
    'web development Sweden',
    'custom web applications Sweden',
    'responsive web design Sweden',
    'e-handel utveckling',
  ],
};

// Mobile Development Page Metadata
export const MOBILE_DEV_METADATA: Metadata = {
  ...pageMetadata(
    'Apputveckling Sverige | iOS & Android App Development',
    'Mobile app development in Sweden: native iOS and Android apps and React Native cross-platform apps, designed and built by one team.',
    '/MobileDev',
  ),
  keywords: [
    'apputveckling Sverige',
    'mobilapp utveckling Sverige',
    'iOS utvecklare Sverige',
    'Android utveckling Sverige',
    'React Native utvecklare',
    'native app utveckling',
    'cross-platform appar',
    'mobile app development Sweden',
    'iPhone app utveckling',
    'Android app Sverige',
    'app design Sverige',
  ],
};

// Fullstack Development Page Metadata
export const FULLSTACK_DEV_METADATA: Metadata = {
  ...pageMetadata(
    'Fullstack Utveckling Sverige | Backend & Frontend Development',
    'Fullstack development in Sweden: end-to-end solutions from frontend to backend, database to cloud deployment.',
    '/FullstackDev',
  ),
  keywords: [
    'fullstack utvecklare Sverige',
    'backend utveckling Sverige',
    'API utveckling Sverige',
    'databasdesign Sverige',
    'cloud deployment Sweden',
    'Node.js utvecklare Sverige',
    'fullstack development Sweden',
    'backend developer Sweden',
    'cloud architecture Sverige',
    'DevOps Sverige',
    'serverless utveckling',
  ],
};

// AI Development Page Metadata
export const AI_DEV_METADATA: Metadata = {
  ...pageMetadata(
    'AI Development Sweden | Practical AI Integrations',
    'AI development and integration services in Sweden. From first proof of concept to production-ready integrations with Anthropic, OpenAI, and Google AI.',
    '/AIDev',
  ),
  keywords: [
    'AI utveckling Sverige',
    'AI integration Sverige',
    'LLM development Sweden',
    'OpenAI integration',
    'Anthropic Claude integration',
    'AI consultancy Sweden',
    'GenAI development',
    'AI proof of concept',
    'AI development Sweden',
  ],
};

// Contact Page Metadata
export const CONTACT_METADATA: Metadata = {
  ...pageMetadata(
    'Contact Us | Digital Agency in Sweden',
    `Contact ${COMPANY.name} in Gothenburg, Sweden. Email ${COMPANY.email} or call ${COMPANY.phone} to talk about your website, app or platform.`,
    '/contact',
  ),
  keywords: [
    'kontakta digital byrå',
    'webbyrå Sverige kontakt',
    'offert webbutveckling',
    'digital agency contact Sweden',
    'project inquiry Sweden',
    'kostnadsfri konsultation',
  ],
};

// About Page Metadata
export const ABOUT_METADATA: Metadata = {
  ...pageMetadata(
    'About Us | Digital Agency in Sweden',
    `${COMPANY.name} is a small team of designers and developers in Gothenburg who build digital products end to end, from the first conversation to launch.`,
    '/about',
  ),
  keywords: [
    'om oss',
    'digital byrå Sverige',
    'webbyrå team',
    'about us',
    'Swedish web developers',
  ],
};

// Structured Data - LocalBusiness Schema (Optimized for Swedish Market)
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: COMPANY.name,
  alternateName: 'Zenia Digital Agency',
  description: 'Design and development studio in Gothenburg, Sweden, building websites, mobile apps, full-stack platforms and AI integrations.',
  url: BASE_URL,
  // The dark mark: Google shows the logo on white, where logowhite.png disappears.
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/zenialogo.png`,
    width: 752,
    height: 689,
  },
  image: `${BASE_URL}/opengraph-image.png`,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  foundingDate: COMPANY.founded,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'St Badhusgatan 18',
    postalCode: '411 21',
    addressLocality: SWEDISH_MARKET.city,
    addressRegion: SWEDISH_MARKET.region,
    addressCountry: SWEDISH_MARKET.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 57.7089,
    longitude: 11.9746,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Sweden',
    },
    'Worldwide',
  ],
  sameAs: [
    'https://linkedin.com/company/zeniadigital',
    'https://instagram.com/zeniadigital',
  ],
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'Fullstack Development',
    'AI Development',
    'Next.js',
    'React',
    'TypeScript',
    'React Native',
    'Node.js',
    'PostgreSQL',
    'OpenAI',
    'Anthropic Claude',
  ],
  slogan: COMPANY.tagline,
};

// Legacy Organization Schema (kept for backwards compatibility)
export const ORGANIZATION_SCHEMA = LOCAL_BUSINESS_SCHEMA;

// WebSite schema: Google uses its name for the site name shown in results.
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: COMPANY.name,
  url: BASE_URL,
  inLanguage: 'en',
  publisher: { '@id': `${BASE_URL}/#organization` },
};

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
    'Worldwide',
  ],
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
  inLanguage: 'en',
});

// Helper function to merge metadata
export const mergeMetadata = (override: Metadata): Metadata => ({
  ...DEFAULT_METADATA,
  ...override,
});
