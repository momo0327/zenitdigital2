import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins, Antonio } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { DEFAULT_METADATA, LOCAL_BUSINESS_SCHEMA } from "./constants/seo";
import NavbarSwitcher from "./components/NavbarSwitcher";
import {
  rightGroteskCompactBlack,
  rightGroteskMedium,
  ppNeueMontrealSemibold,
  ppNeueMontrealRegular,
  ppNeueMontrealMedium,
} from "./fonts/v2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const shentox = localFont({
  src: "./assets/Shentox W01 Bold.ttf",
  variable: "--font-shentox",
  display: "swap",
});

const suisseIntl = localFont({
  src: "./assets/SuisseIntlBook.ttf",
  variable: "--font-suisse",
  display: "swap",
});

export const metadata: Metadata = DEFAULT_METADATA;

// Tints the mobile browser chrome (Safari's URL bar and toolbar strips) to
// match the site background.
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preloads the Manrope faces used across the site. Without this the
            browser only discovers them after parsing the stylesheet, so the
            first paint uses a fallback and visibly swaps (FOUT). */}
        {["400", "500", "600"].map((weight) => (
          <link
            key={weight}
            rel="preload"
            href={`/zenia/manrope-${weight}.woff`}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        ))}
        {/* LocalBusiness Schema for Swedish Market SEO */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${antonio.variable} ${shentox.variable} ${suisseIntl.variable} ${rightGroteskCompactBlack.variable} ${rightGroteskMedium.variable} ${ppNeueMontrealSemibold.variable} ${ppNeueMontrealRegular.variable} ${ppNeueMontrealMedium.variable} antialiased`}
      >
        <NavbarSwitcher />
        {children}
      </body>
    </html>
  );
}
