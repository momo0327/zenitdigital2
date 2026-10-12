"use client";

import ZeniaShell from "@/zenia/ZeniaShell";
import WorkPage from "@/zenia/components/WorkPage";

export default function ZeniaWork() {
  return (
    <ZeniaShell>
      {({ openProject }) => <WorkPage onProject={openProject} />}
    </ZeniaShell>
  );
}
