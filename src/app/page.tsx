import { AboutBrief } from "@/src/components/editorial/AboutBrief";
import { Hero } from "@/src/components/editorial/Hero";
import { LifelineSection } from "@/src/components/editorial/LifelineSection";
import { Principles } from "@/src/components/editorial/Principles";
import { Quote } from "@/src/components/editorial/Quote";
import { SelectedWork } from "@/src/components/editorial/SelectedWork";
import { WritingList } from "@/src/components/editorial/WritingList";
import { getFeaturedProjects, getWritings } from "@/src/lib/content";
import { arthurLifeline } from "@/src/lib/lifelines/arthur";

export default async function Home() {
  const [projects, writings] = await Promise.all([
    getFeaturedProjects(),
    getWritings(),
  ]);

  return (
    <>
      <Hero />
      <SelectedWork projects={projects} />
      <Quote />
      <LifelineSection
        markers={arthurLifeline.markers}
        birthYear={arthurLifeline.birthYear}
        title={arthurLifeline.name}
      />
      <Principles />
      <div className="grid gap-16 border-b border-rule py-20 md:grid-cols-12 md:gap-12 md:py-28">
        <div className="md:col-span-7">
          <WritingList writings={writings.slice(0, 4)} />
        </div>
        <div className="md:col-span-5 md:border-l md:border-rule md:pl-12">
          <AboutBrief />
        </div>
      </div>
    </>
  );
}
