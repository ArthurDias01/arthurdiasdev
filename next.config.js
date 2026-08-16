/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
        pathname: "**",
        protocol: "https",
      },
      {
        hostname: "arthurdias.dev",
        pathname: "**",
        protocol: "https",
      },
      {
        hostname: "pub-6b4914f7508142298cc5cb051e1e84ae.r2.dev",
        pathname: "**",
        protocol: "https",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
};

module.exports = config;
