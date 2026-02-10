import { getProjects } from '@/src/lib/content'

type Sitemap = Array<{
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
}>

export default async function sitemap(): Promise<Sitemap> {
  const projects = await getProjects()
  const projectUrls: Sitemap = projects.map((project) => ({
    url: `https://arthurdias.dev/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: 'https://arthurdias.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://arthurdias.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://arthurdias.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://arthurdias.dev/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.95,
    },
    ...projectUrls,
  ]
}
