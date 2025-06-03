import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }] // allow cloudinary to use <Image/>
  }
};

export default nextConfig;
