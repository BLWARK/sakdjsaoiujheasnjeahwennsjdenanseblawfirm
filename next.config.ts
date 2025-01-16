import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Tambahkan ini untuk static export
  reactStrictMode: true,   // Opsional: mode strict React
  images: {
    unoptimized: true,     // Agar image tetap bisa digunakan di export static
  },
};

export default nextConfig;
