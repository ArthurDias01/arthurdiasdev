import { AboutMeBox } from '@/src/components/AboutMeBox'
import { DescriptionMobile } from '@/src/components/DescriptionMobile'
import { JobTypes } from '@/src/components/JobTypes'
import { PageHeader } from '@/src/components/PageHeader'
import { PageWrapper } from '@/src/components/PageWrapper'
import { ProfileBox } from '@/src/components/ProfileBox'
import { ScheduleAmeetButton } from '@/src/components/ScheduleAmeetButton'

export default async function Home() {
  return (
    <PageWrapper className="flex min-h-[calc(100vh-8rem)] flex-col gap-10 pt-2 md:flex-row md:gap-12 md:pt-4">
      {/* Mobile: stacked profile + summary + skills */}
      <aside className="flex flex-col gap-10 md:hidden" aria-label="Profile and summary">
        <ProfileBox />
        <DescriptionMobile />
        <JobTypes />
      </aside>
      {/* Desktop: main content; profile in layout sidebar */}
      <div className="hidden w-full flex-col md:flex">
        <PageHeader label="Portfolio" title="Summary & expertise" />
        <div className="opacity-0 animate-staggerUp [animation-fill-mode:forwards] motion-reduce:opacity-100 motion-reduce:animate-none" style={{ animationDelay: '80ms' }}>
          <AboutMeBox />
        </div>
        <section className="mt-12" aria-labelledby="expertise-heading">
          <h2 id="expertise-heading" className="sr-only">
            Areas of expertise
          </h2>
        </section>
      </div>
      <ScheduleAmeetButton />
    </PageWrapper>
  )
}
