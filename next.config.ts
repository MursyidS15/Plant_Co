import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "cdn.plantssparkjoy.com",  // 🟢 Tambahan baru
      },
      {
        protocol: "https",
        hostname: "th.bing.com",  // 🟢 Tambahan baru
      },
      {
        protocol: "https",
        hostname: "pf.nice-cdn.com",  // 🟢 Tambahan baru
      },
    ],
  },
};

export default nextConfig;
