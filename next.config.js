/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  eslint: ".eslint.json",
  typescript: "tsconfig.json",
  images: {
    domains: ["fakestoreapi.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
