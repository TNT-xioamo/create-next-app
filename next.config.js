/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
