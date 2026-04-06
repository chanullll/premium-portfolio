import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allows all paths from Unsplash
      },
      // Issarahata wena domains (e.g., GitHub avatars, AWS S3) add karanawa nam, 
      // meka pallehata thawa object ekak widihata danna puluwan.
    ],
  },
};

export default nextConfig;