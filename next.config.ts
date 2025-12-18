import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization for simpler setup
  images: {
    unoptimized: true,
  },
  // Increase stability by reducing aggressive optimizations
  reactStrictMode: true,
  // Transpile next-mdx-remote for compatibility
  transpilePackages: ['next-mdx-remote'],
  // Disable powered by header
  poweredByHeader: false,
};

export default nextConfig;
