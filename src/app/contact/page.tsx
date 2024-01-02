import { ContactCard } from '@/src/components/ContactCard'
import { GeneralContactCard } from '@/src/components/GeneralContatcCard'
import { PageWrapper } from '@/src/components/PageWrapper'
import { ScheduleAmeet } from '@/src/components/ScheduleAmeet'

export default async function Contact() {
  return (
    <PageWrapper className="flex min-h-[90vh] w-full flex-col gap-4 rounded-[20px]  bg-neutral-300 px-8 pb-12 md:mt-8 dark:bg-neutral-950">
      <div className="mt-8 flex w-full flex-row items-center gap-2">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-primary-500">
          Contact
        </h1>
        <span className="h-1 w-1/4 rounded-sm bg-gradient-to-r from-teal-600 to-primary-300" />
      </div>
      <section className="mx-auto flex w-full flex-col gap-4 rounded-[20px] bg-neutral-300 pb-12 md:flex-row md:flex-wrap dark:bg-neutral-950">
        <div className="flex flex-1 flex-wrap gap-4">
          <ContactCard type="email" info="arthursantos01@gmail.com" />
          <ContactCard type="phone" info="+55 (11) 9 5279-5920" />
          <ContactCard type="address" info="São Paulo, SP" />
        </div>

        <GeneralContactCard
          text="I'm always open to discussing product design work or partnership opportunities."
          emphasized="Lets change the world through elegant data-driven apps."
        />
        <ScheduleAmeet />
      </section>
    </PageWrapper>
  )
}
