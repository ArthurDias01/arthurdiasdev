import { getProjects } from '../lib/contentapi'

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
  const projectUrls = projects.map((project) => {
    return {
      url: `https://arthurdias.dev/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  }) as Sitemap
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
