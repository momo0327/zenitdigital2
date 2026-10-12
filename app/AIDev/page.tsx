import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '../components/AIDevPageComponents/Header'
import Footer from '../components/Footer'
import {
  AI_DEV_METADATA,
  BASE_URL,
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from '../constants/seo'

export const metadata: Metadata = AI_DEV_METADATA

function page() {
  const serviceSchema = generateServiceSchema(
    'AI Development',
    'Practical AI development and integration services. From first proof of concept to production-ready integrations with Anthropic, OpenAI, and Google AI.',
    `${BASE_URL}/AIDev`
  );

  const webPageSchema = generateWebPageSchema(
    'AI Development Services Sweden',
    'AI development and integration services in Sweden. Build practical AI features sized to the problem you are solving.',
    `${BASE_URL}/AIDev`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'AI Development', url: `${BASE_URL}/AIDev` },
  ]);

  return (
    <div>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />

      <Header />
      <Footer />
    </div>
  )
}

export default page
