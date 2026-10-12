"use client";

import ZeniaShell from "@/zenia/ZeniaShell";
import {
  HeroTitle,
  Cases,
  Process,
  Portal,
  PortalActions,
  Faq,
} from "@/zenia/components/Sections";
import ServicesSection from "@/zenia/components/ServicesSection";
import HeroCarousel from "@/zenia/components/HeroCarousel";
import Statement from "@/zenia/components/Statement";
import Testimonials from "@/zenia/components/Testimonials";

export default function ZeniaHome() {
  return (
    <ZeniaShell>
      {({ openContact, openProject, reducedMotion, menuOpen, dialog }) => (
        <>
          <HeroTitle />
          <HeroCarousel
            onProject={openProject}
            reducedMotion={reducedMotion}
            blocked={menuOpen || !!dialog}
          />
          <Statement reducedMotion={reducedMotion} />
          <Cases onProject={openProject} />
          <ServicesSection onContact={openContact} />
          <Testimonials
            reducedMotion={reducedMotion}
            blocked={menuOpen || !!dialog}
          />
          <Process />
          <Portal onContact={openContact} />
          <PortalActions onContact={openContact} />
          <Faq onContact={openContact} />
        </>
      )}
    </ZeniaShell>
  );
}
