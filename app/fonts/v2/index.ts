import localFont from "next/font/local";

// v2 redesign typeface — Right Grotesk
// Kept isolated from the legacy Antonio/Geist font setup in app/layout.tsx.

export const rightGroteskCompactBlack = localFont({
  src: "./RightGrotesk-CompactBlack.otf",
  variable: "--font-v2-heading",
  weight: "900",
  display: "swap",
});

export const rightGroteskMedium = localFont({
  src: "./RightGrotesk-Medium.otf",
  variable: "--font-v2-body",
  weight: "500",
  display: "swap",
});

// v2 redesign typeface — PP Neue Montreal

export const ppNeueMontrealSemibold = localFont({
  src: "./PPNeueMontreal-Semibold.otf",
  variable: "--font-v2-title",
  weight: "600",
  display: "swap",
});

export const ppNeueMontrealRegular = localFont({
  src: "./PPNeueMontreal-Regular.otf",
  variable: "--font-v2-medium",
  weight: "400",
  display: "swap",
});

export const ppNeueMontrealMedium = localFont({
  src: "./PPNeueMontreal-Medium.otf",
  variable: "--font-v2-statement",
  weight: "500",
  display: "swap",
});
