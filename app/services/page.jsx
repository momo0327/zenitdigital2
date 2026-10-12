"use client";

import ZeniaShell from "@/zenia/ZeniaShell";
import { ServicesPage } from "@/zenia/components/Sections";

export default function ZeniaServices() {
  return (
    <ZeniaShell transparent>
      {({ openContact }) => <ServicesPage onContact={openContact} />}
    </ZeniaShell>
  );
}
