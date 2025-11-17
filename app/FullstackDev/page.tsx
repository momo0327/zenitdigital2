import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '../components/FullstackDevPageComponents/Header'
import {
  FULLSTACK_DEV_METADATA,
  BASE_URL,
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from '../constants/seo'

export const metadata: Metadata = FULLSTACK_DEV_METADATA

function page() {
  // Structured Data for Fullstack Development Page
  const serviceSchema = generateServiceSchema(
    'Fullstack Development',
    'End-to-end fullstack development services. From frontend to backend, database to deployment. Complete digital solutions.',
    `${BASE_URL}/FullstackDev`
  );

  const webPageSchema = generateWebPageSchema(
    'Fullstack Development Services Stockholm',
    'Complete fullstack development services in Stockholm. End-to-end solutions from frontend to backend, database to cloud deployment.',
    `${BASE_URL}/FullstackDev`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Fullstack Development', url: `${BASE_URL}/FullstackDev` },
  ]);

  return (
    <div>
      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />
      {/* WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />

      <Header/>
    </div>
  )
}

export default page