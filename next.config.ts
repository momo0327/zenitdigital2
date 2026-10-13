import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 90, 100],
  },
  // Pages of the old site that the Zenia redesign replaced.
  async redirects() {
    return [
      // Separate rules: on OpenNext an empty :path* is left in the destination literally.
      { source: "/zenit", destination: "/", permanent: true },
      { source: "/zenit/:path+", destination: "/:path+", permanent: true },
      { source: "/ContactPage", destination: "/contact", permanent: true },
      { source: "/faqs", destination: "/#faq", permanent: true },
      // One host for search engines: www serves the same pages as the apex.
      { source: "/", has: [{ type: "host", value: "www.zeniadigital.se" }], destination: "https://zeniadigital.se/", permanent: true },
      { source: "/:path+", has: [{ type: "host", value: "www.zeniadigital.se" }], destination: "https://zeniadigital.se/:path+", permanent: true },
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
