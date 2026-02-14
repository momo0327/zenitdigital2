import React from 'react';
import type { Metadata } from 'next';
import ServicesScroll from '../components/sections/ServicesScroll';
import Steps from '../components/Steps';
import Achievements from '../components/Achievments';
import FAQ from '../components/Faq';
import Cta from '../components/Cta';
import ExpandableFeatures from '../components/ExpandableFeatures';

export const metadata: Metadata = {
  title: 'Our Services - Zenit Digital',
  description: 'Explore our comprehensive digital services: Web Development, Mobile App Development, and Fullstack Solutions. Custom-built solutions for your business needs.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesScroll />
      {/* <CardStack /> */}
      <ExpandableFeatures
      title="Digital utveckling på prenumeration"
      subtitle="Få tillgång till expertisen bakom några av världens mest älskade digitala tjänster. Med vårt abonnemang får du ett flexibelt team specialister som kliver in med rätt kompetens i rätt fas. Ta dina idéer till marknaden i rekordfart, med digitala lösningar som gör skillnad från dag ett."
      features={[
        {
          number: '01',
          title: 'Krångelfri utveckling på abonnemang',
          description: 'Få tillgång till ett komplett utvecklingsteam utan långsiktiga bindningar. Skala upp eller ner efter behov, med transparent prissättning och flexibla villkor som följer din verksamhet.',
          image: "/voz.png"
        },
        {
          number: '02',
          title: 'Allt under ett tak',
          description: 'Från strategi och design till utveckling och drift - vi hanterar hela kedjan. Ett team, en kontakt, en helhetslösning som sparar tid och eliminerar kommunikationsbrister.',
          image: "/group 6-3.png"
        },
        {
          number: '03',
          title: 'Plattformsoberoende partner',
          description: 'Vi låter alltid affärsnytta styra teknikvalet. Oavsett om du behöver webblösningar, mobilappar eller integrerade system - vi bygger med rätt teknologi för dina specifika behov.',
          image: "/h-1 3.png"
        },
        {
          number: '04',
          title: 'Ledande expertis',
          description: 'Vårt team består av erfarna specialister som har byggt lösningar för ledande företag. Du får tillgång till deep tech-kunskap och best practices från dag ett.',
          image: "/voz.png"
        }
      ]}
      autoPlayDuration={5000}
      />
      <Achievements/>
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
