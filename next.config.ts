import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    return config; // Enables Webpack automatically
  },
};

export default nextConfig;
