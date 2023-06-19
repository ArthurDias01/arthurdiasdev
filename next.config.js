/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom',
    loaderFile: './src/contentfulLoader.ts',
  },
}

module.exports = nextConfig
