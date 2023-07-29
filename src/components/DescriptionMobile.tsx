import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getResumeDescription } from '../lib/contentapi'

export const DescriptionMobile = async () => {
  const docDescription = await getResumeDescription()

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
