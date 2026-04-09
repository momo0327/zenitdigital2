import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { DEFAULT_METADATA, LOCAL_BUSINESS_SCHEMA } from "./constants/seo";
import Navbar from "./components/navbar";
import { CookieConsent } from "./components/CookieConsent";
import TransitionProvider from "./components/TransitionProvider";

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

const shentox = localFont({
  src: "./assets/Shentox W01 Bold.ttf",
  variable: "--font-shentox",
  display: "swap",
});

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${shentox.variable} antialiased`}
      >
        <Navbar />
        <TransitionProvider>
          {children}
        </TransitionProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
