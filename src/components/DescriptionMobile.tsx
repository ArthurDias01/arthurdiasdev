import { getResume } from "@/src/lib/content";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { MdxContent } from "./MdxContent";

export const DescriptionMobile = async () => {
  const resume = await getResume();

  return (
    <Card className="w-full border-l-4 border-l-primary-500/60 dark:border-l-primary-400/60">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-primary-700 dark:text-primary-400">
          {resume.title}
        </CardTitle>
        <div
          className="mt-2 h-1 w-12 rounded-full bg-primary-500/80 dark:bg-primary-400/80"
          aria-hidden
        />
      </CardHeader>
      <CardContent className="prose prose-neutral max-w-none dark:prose-invert prose-p:text-neutral-700 dark:prose-p:text-neutral-300">
        <MdxContent source={resume.body} />
      </CardContent>
    </Card>
  );
};
