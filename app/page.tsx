import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { Suspense } from 'react';
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import ReversedHeader from "./components/ReversedHeader";
import Text from "./components/text";
import TriHeader from "./components/triHeader";
import GreenCTA from "./components/GreenCta";
import FeaturesGrid from "./components/FeaturesGrid";
import SelectedWork from "./components/selectedWorks";
import Cta from "./components/Cta";
import {
  HOME_METADATA,
  BASE_URL,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from "./constants/seo";

// Dynamic imports for below-the-fold heavy components (code splitting)
const ScrollStack = dynamic(() => import('./components/ScrollStack'), {
  loading: () => <div className="min-h-screen" />,
});
const Steps = dynamic(() => import('./components/Steps'), {
  loading: () => <div className="min-h-96" />,
});
const FAQ = dynamic(() => import('./components/Faq'), {
  loading: () => <div className="min-h-96" />,
});

export const metadata: Metadata = HOME_METADATA;

export default function Home() {
  // Structured Data for Homepage
  const webPageSchema = generateWebPageSchema(
    'Zenit Digital - Digital Agency Sweden',
    'Leading digital agency in Sweden. Web development, mobile apps, and fullstack solutions.',
    BASE_URL
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
  ]);

  return (
    <div>
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

      <Header />

      <Text />
      {/* Flex container for side-by-side components */}
      <div className="flex flex-col lg:flex-row bg-white">
          <SubHeader />
          <ReversedHeader />
      </div>
      <TriHeader/>
        <SelectedWork/>
        <GreenCTA/>
        {/* <FeaturesGrid/> */}
      {/* <HelpGrid/> */}
      {/* <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ScrollStack/>
      </Suspense> */}
      <Suspense fallback={<div className="min-h-96 bg-white" />}>
        <Steps/>
      </Suspense>
      <div id="faq">
        <Suspense fallback={<div className="min-h-96 bg-white" />}>
          <FAQ/>
        </Suspense>
      </div>
      <Cta/>
    </div>
  );
}