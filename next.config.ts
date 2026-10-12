import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 90, 100],
  },
};

if (process.env.NODE_ENV === "development") {
  // Loaded dynamically so the Cloudflare/miniflare runtime never spins up during `next build`.
  void import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}

export default nextConfig;
