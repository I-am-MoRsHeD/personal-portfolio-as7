import type { NextConfig } from "next";
// import createNextIntPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
};

export default nextConfig;
