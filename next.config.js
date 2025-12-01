/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,   // ← ini FIX yang paling aman
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;
