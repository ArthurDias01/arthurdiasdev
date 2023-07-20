import { getProjects } from '../lib/contentapi'

export default async function sitemap() {
  const projects = await getProjects()
  const projectUrls = projects.map((project) => {
    return {
      url: `https://arthurdias.dev/projects/${project.id}`,
      lastModified: new Date(project.date),
    }
  })
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
    ...projectUrls,
  ]
}
