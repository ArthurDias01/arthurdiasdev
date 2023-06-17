import { ProfileBox } from '@/src/components/ProfileBox'
import { DescriptionMobile } from '@/src/components/DescriptionMobile'
import { JobTypes } from '@/src/components/JobTypes'
import { AboutMeBox } from '@/src/components/AboutMeBox'
import { ScheduleAmeetButton } from '../components/ScheduleAmeetButton'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-8 md:flex-row">
      <div className="flex flex-col md:hidden">
        <ProfileBox />
        <DescriptionMobile />
        <JobTypes />
      </div>
      <div className="hidden w-full flex-col md:flex">
        <AboutMeBox />
      </div>
      <ScheduleAmeetButton />
    </main>
  )
}
