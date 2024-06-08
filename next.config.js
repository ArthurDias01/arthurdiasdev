/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.ctfassets.net',
        pathname: '**',
        protocol: 'https',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = config
