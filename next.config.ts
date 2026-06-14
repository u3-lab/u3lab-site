import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/hito-to-ai',
        destination: '/blog/2026-06-14',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
