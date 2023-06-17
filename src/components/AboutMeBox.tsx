import { getResumeDescription } from '../lib/contentapi'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { JobTypes } from './JobTypes'

export const AboutMeBox = async () => {
  const docDescription = await getResumeDescription()

  return (
    <section className="w-full flex flex-col gap-4 bg-neutral-300 dark:bg-neutral-950 rounded-[20px] p-8 mx-auto">
      <div className="w-full flex flex-row items-center gap-2">
        <h2 className="text-2xl text-neutral-900 dark:text-primary-500 font-semibold">
          {docDescription.title}
        </h2>
        <span className="h-1 w-1/4 bg-gradient-to-r from-teal-600 to-primary-300 rounded-sm" />
      </div>
      <p className="flex flex-wrap">
        {documentToReactComponents(
          docDescription.description.content[0].content[0],
        )}
      </p>
      <JobTypes />
    </section>
  )
}
