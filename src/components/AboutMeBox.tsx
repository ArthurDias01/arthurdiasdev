import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { JobTypes } from './JobTypes'
// import { getResumeDescription } from '@/src/lib/contentapi'
import { apihost } from '../lib/apihost'
import { IAuthorFields } from '../@types/contentful'
import { revalidate } from '../utils/constants'

async function getCachedResumeDescription(): Promise<{ data: IAuthorFields }> {
  const response = await fetch(`${apihost}/api/get-resume-description`, {
    next: {
      revalidate,
    },
  })
  return response.json()
}

export const AboutMeBox = async () => {
  const { data: docDescription } = await getCachedResumeDescription()

  return (
    <section className="mx-auto flex w-full flex-col gap-4 rounded-[20px] bg-neutral-300 p-8 dark:bg-neutral-950">
      <div className="flex w-full flex-row items-center gap-2">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-primary-500">
          {docDescription?.title}
        </h2>
        <span className="h-1 w-1/4 rounded-sm bg-gradient-to-r from-teal-600 to-primary-300" />
      </div>
      <p className="flex flex-wrap">
        {documentToReactComponents(
          docDescription?.description.content[0].content[0],
        )}
      </p>
      <JobTypes />
    </section>
  )
}
