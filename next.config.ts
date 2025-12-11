import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable Next.js TypeScript rewriting & plugin injection
    disableExperimentalReactTypeScriptTransform: true,
    typedRoutes: false,
    serverActions: false,
  },

  webpack(config) {
    return config;
  }
};

export default nextConfig;
