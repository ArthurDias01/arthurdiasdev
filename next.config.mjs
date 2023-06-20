import withPlaiceholder from '@plaiceholder/next'

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    domains: ['images.ctfassets.net'],
  },
}

export default withPlaiceholder(config)
