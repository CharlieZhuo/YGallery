// import { NextConfig } from "next";
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pvetbowzwnhjkjhsqwep.supabase.co",
        pathname: "/storage/v1/**",
      },
    ],
  },
};

module.exports = nextConfig;
