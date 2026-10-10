import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { Suspense } from 'react';
import Header from "@/app/components/header";
import SubHeader from "@/app/components/subHeader";
import ReversedHeader from "@/app/components/ReversedHeader";
import Text from "@/app/components/text";
import TriHeader from "@/app/components/triHeader";
import GreenCTA from "@/app/components/GreenCta";
import FeaturesGrid from "@/app/components/FeaturesGrid";
import SelectedWork from "@/app/components/selectedWorks";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";
import Navbar2 from "@/app/components/v2/Navbar2";
import Hero2 from "@/app/components/v2/Hero2";
import Statement2 from "@/app/components/v2/Statement2";
import Features2 from "@/app/components/v2/Features2";
import Services2 from "@/app/components/v2/Services2";
import Projects2 from "@/app/components/v2/Projects2";
import CtaShowcase2 from "@/app/components/v2/CtaShowcase2";
import AutomationShowcase2 from "@/app/components/v2/AutomationShowcase2";
import {
  HOME_METADATA,
  BASE_URL,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from "@/app/constants/seo";

// Dynamic imports for below-the-fold heavy components (code splitting)
const ScrollStack = dynamic(() => import('@/app/components/ScrollStack'), {
  loading: () => <div className="min-h-screen" />,
});
const Steps = dynamic(() => import('@/app/components/Steps'), {
  loading: () => <div className="min-h-96" />,
});
const Process2 = dynamic(() => import('@/app/components/v2/Process2'), {
  loading: () => <div className="min-h-screen bg-white" />,
});
const FAQ = dynamic(() => import('@/app/components/Faq'), {
  loading: () => <div className="min-h-96" />,
});
const Faq2 = dynamic(() => import('@/app/components/v2/Faq2'), {
  loading: () => <div className="min-h-96 bg-white" />,
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
    <div className="bg-[#F5F5F5]">
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

      <Navbar2 />

      <Hero2 />
      {/* <Header /> */}

      <Statement2 />
      {/* <Text /> */}

      <Features2 />

      <Projects2 />

      <Services2 />

      <CtaShowcase2 />

      <AutomationShowcase2 />

      {/* <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Process2 />
      </Suspense> */}

      <Suspense fallback={<div className="min-h-96 bg-white" />}>
        <Faq2 />
      </Suspense>

      {/* Flex container for side-by-side components */}
      {/* <div className="flex flex-col lg:flex-row bg-[#F5F5F5]">
          <SubHeader />
          <ReversedHeader />
      </div>
      <TriHeader/> */}
        {/* <SelectedWork/> */}
        {/* <GreenCTA/> */}
        {/* <FeaturesGrid/> */}
      {/* <HelpGrid/> */}
      {/* <Suspense fallback={<div className="min-h-screen bg-[#F5F5F5]" />}>
        <ScrollStack/>
      </Suspense> */}
      {/* <Suspense fallback={<div className="min-h-96 bg-[#F5F5F5]" />}>
            <Steps
        bgColor="bg-white"
        titleColor="text-[#1E1F1F]"
        subtitleColor="text-[#0A0D24]/70"
        cardBgColor="bg-[#F0F0F0]"
        cardTextColor="text-[#0A0D24]"
        iconBgColor="bg-[#0A0D24]/10"
        iconColor="text-[#0A0D24]"
      />
      </Suspense> */}
      {/* <div id="faq">
        <Suspense fallback={<div className="min-h-96 bg-[#F5F5F5]" />}>
          <FAQ/>
        </Suspense>
      </div> */}
      <Cta/>
      <Footer/>
    </div>
  );
}