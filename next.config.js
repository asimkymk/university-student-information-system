/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['demos.creative-tim.com'],
  },
  experimental: { images: { layoutRaw: true } }


}

module.exports = nextConfig