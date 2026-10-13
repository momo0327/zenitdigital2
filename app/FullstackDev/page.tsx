import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/FullstackDevPageComponents/Header'
import Footer from '../components/Footer'
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
    'Fullstack Development Services Sweden',
    'Complete fullstack development services in Sweden. End-to-end solutions from frontend to backend, database to cloud deployment.',
    `${BASE_URL}/FullstackDev`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Fullstack Development', url: `${BASE_URL}/FullstackDev` },
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
      <Footer />
    </div>
  )
}

export default page