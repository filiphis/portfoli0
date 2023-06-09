const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "raw.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
