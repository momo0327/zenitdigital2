"use client";

import ZeniaShell from "@/zenia/ZeniaShell";
import { PortalHero, PortalAbout } from "@/zenia/components/Sections";

export default function ZeniaPortal() {
  return (
    <ZeniaShell dark>
      <>
        <PortalHero />
        <PortalAbout />
      </>
    </ZeniaShell>
  );
}
