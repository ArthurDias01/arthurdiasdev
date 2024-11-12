import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { IAuthorFields } from '../@types/contentful'
import { apiHost } from '../lib/apihost'
import { JobTypes } from './JobTypes'

async function getCustomAboutMe(): Promise<{ data: IAuthorFields }> {
  const response = await fetch(`${apiHost}/api/get-resume-description`, {
    next: { revalidate: 0 }, // Set to 0 for no cache, or your desired seconds
  })
  return response.json()
}

// Remove the standalone revalidate export
// export const revalidate = 60

export const AboutMeBox = async () => {
  const { data: docDescription } = await getCustomAboutMe()

  return (
    <section className="mx-auto flex w-full flex-col gap-4 rounded-[20px] bg-neutral-300 p-8 dark:bg-neutral-950">
      <div className="flex w-full flex-row items-center gap-2">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-primary-500">
          {docDescription?.title}
        </h2>
        <span className="h-1 w-1/4 rounded-sm bg-gradient-to-r from-teal-600 to-primary-300" />
      </div>
      <p className="flex h-fit flex-wrap">
        {documentToReactComponents(
          docDescription?.description.content[0].content[0],
        )}
      </p>
      <JobTypes />
    </section>
  )
}
