import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
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
        {["/zenia", "/zenia-services"].flatMap((dir) =>
          ["400", "500", "600"].map((weight) => (
            <link
              key={`${dir}-${weight}`}
              rel="preload"
              href={`${dir}/manrope-${weight}.woff`}
              as="font"
              type="font/woff"
              crossOrigin="anonymous"
            />
          )),
        )}
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${shentox.variable} ${suisseIntl.variable} ${rightGroteskCompactBlack.variable} ${rightGroteskMedium.variable} ${ppNeueMontrealSemibold.variable} ${ppNeueMontrealRegular.variable} ${ppNeueMontrealMedium.variable} antialiased`}
      >
        <NavbarSwitcher />
        {children}
      </body>
    </html>
  );
}
