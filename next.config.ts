import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 90, 100],
  },
  // Pages of the old site that the Zenia redesign replaced.
  async redirects() {
    return [
      { source: "/zenit/:path*", destination: "/:path*", permanent: true },
      { source: "/ContactPage", destination: "/contact", permanent: true },
      { source: "/faqs", destination: "/#faq", permanent: true },
    ];
  },
};

if (process.env.NODE_ENV === "development") {
  // Loaded dynamically so the Cloudflare/miniflare runtime never spins up during `next build`.
  void import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}

export default nextConfig;
