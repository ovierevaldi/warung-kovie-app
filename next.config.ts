import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [new URL('http://localhost:4000/product-images/**')]
  }
};

export default nextConfig;
