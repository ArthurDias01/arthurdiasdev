import { WritingList } from "@/src/components/editorial/WritingList";
import { getWritings } from "@/src/lib/content";

export const metadata = {
  title: "Writing",
  description:
    "Essays by Arthur Dias on curiosity, systems, and building software that removes friction.",
  alternates: { canonical: "https://arthurdias.dev/writing" },
};

export default async function WritingPage() {
  const writings = await getWritings();

  return (
    <div className="py-16 md:py-24">
      <WritingList
        writings={writings}
        heading="Archive"
        showViewAll={false}
      />
    </div>
  );
}
