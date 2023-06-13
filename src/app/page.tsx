import { ProfileBox } from "@/src/components/ProfileBox";
import { DescriptionMobile } from "@/src/components/DescriptionMobile";
import { JobTypes } from "../components/JobTypes";


export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-4">
      <ProfileBox />
      <DescriptionMobile />
      <JobTypes />
    </main>
  )
}
