import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'cdn.dummyjson.com',
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // Suppresses ESLint errors during builds
  },
};

export default nextConfig;
