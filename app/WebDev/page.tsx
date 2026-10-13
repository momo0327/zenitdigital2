import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/WebDevPageComponents/Header'
import AdvantageCards from '../components/WebDevPageComponents/AdvantageCards'
import Footer from '../components/Footer'
import {
  WEB_DEV_METADATA,
  BASE_URL,
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from '../constants/seo'

export const metadata: Metadata = WEB_DEV_METADATA

function page() {
  // Structured Data for Web Development Page
  const serviceSchema = generateServiceSchema(
    'Web Development',
    'Custom web application development with Next.js, React, and TypeScript. Build fast, scalable, and SEO-optimized websites.',
    `${BASE_URL}/WebDev`
  );

  const webPageSchema = generateWebPageSchema(
    'Web Development Services Sweden',
    'Professional web development services in Sweden. Custom web applications with Next.js, React, and TypeScript.',
    `${BASE_URL}/WebDev`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Web Development', url: `${BASE_URL}/WebDev` },
  ]);

  return (
    <div>
      {/* Service Schema */}
      <script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* WebPage Schema */}
      <script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header/>
      <AdvantageCards/>
      <Footer />
    </div>
  )
}

export default page