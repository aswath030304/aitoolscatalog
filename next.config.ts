/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
    serverActions: false,
  },

  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;
