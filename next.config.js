/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", process.env.STRAPI_HOST],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
