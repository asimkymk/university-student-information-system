/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "demos.creative-tim.com",
      "i.pinimg.com",
      "avesis.iuc.edu.tr",
      "publons.com",
      "avesis.istanbul.edu.tr",
    ],
  },
  experimental: { images: { layoutRaw: true } },
};

module.exports = nextConfig;
