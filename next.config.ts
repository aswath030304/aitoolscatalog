import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    return config;
  },

  experimental: {
    typedRoutes: false,
    serverActions: false,
    tsconfig: false, 
  },
};

export default nextConfig;
