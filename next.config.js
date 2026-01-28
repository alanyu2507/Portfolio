/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig

