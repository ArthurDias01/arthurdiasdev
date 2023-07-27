import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { JobTypes } from './JobTypes'
import { apiPath } from '../utils/apiPath'
import { IAuthorFields } from '../@types/contentful'

export const AboutMeBox = async () => {
  const docDescription = (await fetch(`${apiPath}/api/get-resume-description`, {
    cache: 'force-cache',
  }).then((res) => res.json())) as IAuthorFields

  return (
    <section className="mx-auto flex w-full flex-col gap-4 rounded-[20px] bg-neutral-300 p-8 dark:bg-neutral-950">
      <div className="flex w-full flex-row items-center gap-2">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-primary-500">
          {docDescription.title}
        </h2>
        <span className="h-1 w-1/4 rounded-sm bg-gradient-to-r from-teal-600 to-primary-300" />
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
