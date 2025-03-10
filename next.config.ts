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
        hostname: "cdn.plantssparkjoy.com",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "pf.nice-cdn.com",
      },
      {
        protocol: "https",         // 🟢 Cloudinary
        hostname: "res.cloudinary.com",  
        pathname: "/**",           // 🟢 Izinkan semua path
      },
      {
        protocol: "https",         // 🟢 terragreenhouses.com
        hostname: "terragreenhouses.com",
        pathname: "/**",           // 🟢 Izinkan semua path
      },
      {
        protocol: "https",         // 🟢 cdn11.bigcommerce.com
        hostname: "cdn11.bigcommerce.com",
        pathname: "/**",           // 🟢 Izinkan semua path
      },
      {
        protocol: "https",         // 🟢 www.theseedcollection.com.au
        hostname: "www.theseedcollection.com.au",
        pathname: "/**",           // 🟢 Izinkan semua path
      },
      {
        protocol: "https",         // 🟢 www.aumanns.com.au
        hostname: "www.aumanns.com.au",
        pathname: "/**",           // 🟢 Izinkan semua path
      },
      {
        protocol: "https",         // 🟢 Tambahan buat cdn.shopify.com
        hostname: "cdn.shopify.com",
        pathname: "/**",           // 🟢 Izinkan semua path
      },
    ],
  },
};

export default nextConfig;
