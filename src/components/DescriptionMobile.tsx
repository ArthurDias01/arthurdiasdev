import { getResumeDescription } from "../lib/contentapi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const DescriptionMobile = async () => {
  const docDescription = await getResumeDescription();

  return (
    <section>
      <h2 className="text-2xl text-primary-500">{docDescription.title}</h2>
      <p className="flex flex-wrap">{documentToReactComponents(docDescription.description.content[0].content[0])}</p>
    </section>)
}
