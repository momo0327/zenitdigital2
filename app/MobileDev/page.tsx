import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/MobiledevPageComponents/Header'
import Footer from '../components/Footer'
import {
  MOBILE_DEV_METADATA,
  BASE_URL,
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from '../constants/seo'

export const metadata: Metadata = MOBILE_DEV_METADATA

function page() {
  // Structured Data for Mobile Development Page
  const serviceSchema = generateServiceSchema(
    'Mobile App Development',
    'Native iOS and Android app development. Create engaging mobile experiences with React Native and native technologies.',
    `${BASE_URL}/MobileDev`
  );

  const webPageSchema = generateWebPageSchema(
    'Mobile App Development Services Sweden',
    'Professional mobile app development in Sweden. Native iOS and Android apps, React Native cross-platform solutions.',
    `${BASE_URL}/MobileDev`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Mobile Development', url: `${BASE_URL}/MobileDev` },
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