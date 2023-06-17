import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://arthurdias.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://arthurdias.dev/about',
      lastModified: new Date(),
    },
    {
      url: 'https://arthurdias.dev/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://arthurdias.dev/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://arthurdias.dev/contact',
      lastModified: new Date(),
    },
  ]
}
