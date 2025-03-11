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
        protocol: "https",         
        hostname: "res.cloudinary.com",  
        pathname: "/**",           
      },
      {
        protocol: "https",         
        hostname: "terragreenhouses.com",
        pathname: "/**",           
      },
      {
        protocol: "https",         
        hostname: "cdn11.bigcommerce.com",
        pathname: "/**",           
      },
      {
        protocol: "https",         
        hostname: "www.theseedcollection.com.au",
        pathname: "/**",           
      },
      {
        protocol: "https",         
        hostname: "www.aumanns.com.au",
        pathname: "/**",           
      },
      {
        protocol: "https",         
        hostname: "cdn.shopify.com",
        pathname: "/**",           
      },
      {
        protocol: "https",         
        hostname: "redsquareflowers.com",
        pathname: "/**",           
      },
    ],
  },
};

export default nextConfig;
