import { createClient } from 'contentful'
import { IAuthor, IAuthorFields, IJobTypesFields } from '../@types/contentful'
import {
  ICustomEducationFields,
  ICustomExperienceFields,
  ICustomProject,
} from '../interfaces'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  retryLimit: 3,
  retryOnError: true,
  headers: {
    'X-Contentful-User-Agent': 'contentful.js/12.3.0',
    'cache-control': 'no-cache',
  },
})

export const getResumeDescription = async () => {
  const entries = await client.getEntries<IAuthor, string>({
    content_type: 'author',
    limit: 1,
  })
  return entries.items[0].fields as IAuthorFields
}

export const getJobTypes = async () => {
  const entries = await client.getEntries({
    content_type: 'jobTypes',
  })
  return entries.items.map(
    (item) => item.fields,
  ) as unknown as IJobTypesFields[]
}

export const getProjects = async () => {
  const entries = await client.getEntries({
    content_type: 'project',
    order: '-fields.date' as any,
  })

  const formattedEntries = entries.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    }
  }) as any

  return formattedEntries as ICustomProject[]
}

export const getProject = async (id: string) => {
  try {
    const entries = await client.getEntry(id)
    const formattedEntry = {
      ...entries.fields,
      id: entries.sys.id,
    }
    return formattedEntry as ICustomProject
  } catch (error) {
    return null
  }
}

export const getEducation = async () => {
  const entries = await client.getEntries({
    content_type: 'education',
    order: '-fields.startYear' as any,
  })

  const formattedEntries = entries.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    }
  }) as any

  return formattedEntries as ICustomEducationFields[]
}

export const getExperience = async () => {
  const entries = await client.getEntries({
    content_type: 'experience',
    order: '-fields.startYear' as any,
  })

  const formattedEntries = entries.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    }
  }) as any

  return formattedEntries as ICustomExperienceFields[]
}
