import { getResumeDescription } from '../lib/contentapi'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const DescriptionMobile = async () => {
  const docDescription = await getResumeDescription()

  return (
    <section className="flex max-w-[100%] flex-col gap-4">
      <h2 className="text-2xl text-primary-400">{docDescription.title}</h2>
      <p className="flex flex-wrap">
        {documentToReactComponents(
          docDescription.description.content[0].content[0],
        )}
      </p>
    </section>
  )
}
