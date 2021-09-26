/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  eslint: ".eslint.json",
  typescript: "tsconfig.json",
};

module.exports = nextConfig;
