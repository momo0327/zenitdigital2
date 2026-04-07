import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ServicesScroll from '../components/sections/ServicesScroll';
import Steps from '../components/sections/Steps';
import FAQ from '../components/sections/Faq';
import Cta from '../components/sections/Cta';
import ScrollStack from '../components/sections/ScrollStack';
import FeaturesGrid from '../components/sections/FeaturesGrid';

export const metadata: Metadata = {
  title: 'Our Services - Zenit Digital',
  description: 'Explore our comprehensive digital services: Web Development, Mobile App Development, and Fullstack Solutions. Custom-built solutions for your business needs.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesScroll />
        <FeaturesGrid/>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ScrollStack/>
      </Suspense> 
      <Steps />

      <FAQ
        bgColor="bg-[#051E01]"
        textColor="text-[#B4FFA8]"
      />
      <Cta
        bgColor="bg-[#120128]"
        textColor="text-white"
        accentColor="text-[#BEA1FC]"
      />

    </div>
  );
}
