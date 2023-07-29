import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { getResumeDescription } from '@/src/lib/contentapi'
import { IAuthorFields } from '@/src/@types/contentful'
import { apihost } from '@/src/lib/apihost'
import { revalidate } from '../utils/constants'

async function getCachedResumeDescription(): Promise<{ data: IAuthorFields }> {
  const response = await fetch(`${apihost}/api/get-resume-description`, {
    next: {
      revalidate,
    },
  })
  return response.json()
}

export const DescriptionMobile = async () => {
  const { data: docDescription } = await getCachedResumeDescription()

  return (
    <section className="flex max-w-[100%] flex-col gap-4 rounded-[20px] bg-neutral-400 p-1 dark:bg-neutral-700">
      <h2 className="text-2xl text-primary-400">{docDescription?.title}</h2>
      <p className="flex flex-wrap">
        {documentToReactComponents(
          docDescription?.description.content[0].content[0],
        )}
      </p>
    </section>
  )
}
