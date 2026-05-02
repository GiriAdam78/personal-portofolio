import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/, 
})

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:false,
  reactCompiler: true,
  pageExtensions: ['ts','tsx','md','mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withMDX(nextConfig);
