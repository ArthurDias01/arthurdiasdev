import { ICustomProject } from '../interfaces'
import { apiPath } from '../utils/apiPath'

export default async function sitemap() {
  const data = await fetch(`${apiPath}/api/get-all-projects`, {
    cache: 'force-cache',
  })

  const projects: ICustomProject[] = (await data.json()).data

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
