import { ContactCard } from '@/src/components/ContactCard'
import { GeneralContactCard } from '@/src/components/GeneralContatcCard'
import { ScheduleAmeet } from '@/src/components/ScheduleAmeet'

export default async function Contact() {
  return (
    <article className="flex min-h-[90vh] flex-col pb-12 px-8 md:mt-8  gap-4 w-full bg-neutral-300 dark:bg-neutral-950 rounded-[20px]">
      <div className="w-full mt-8 flex flex-row items-center gap-2">
        <h1 className="text-2xl text-neutral-900 dark:text-primary-500 font-semibold">
          Contact
        </h1>
        <span className="h-1 w-1/4 bg-gradient-to-r from-teal-600 to-primary-300 rounded-sm" />
      </div>
      <section className="w-full flex flex-col md:flex-row md:flex-wrap gap-4 bg-neutral-300 dark:bg-neutral-950 rounded-[20px] pb-12 mx-auto">
        <ContactCard type="email" info="arthursantos01@gmail.com" />
        <ContactCard type="phone" info="+55 (11) 9 5279-5920" />
        <ContactCard type="address" info="São Paulo, SP" />
        <GeneralContactCard
          text="I'm always open to discussing product design work or partnership opportunities."
          emphasized="Feel free to schedule a meeting with me."
        />
        <ScheduleAmeet />
      </section>
    </article>
  )
}
