import { ContactCard } from '@/src/components/ContactCard'
import { GeneralContactCard } from '@/src/components/GeneralContatcCard'
import { PageHeader } from '@/src/components/PageHeader'
import { PageWrapper } from '@/src/components/PageWrapper'
import { ScheduleAmeet } from '@/src/components/ScheduleAmeet'
import { Card, CardContent } from '@/src/components/ui/card'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Arthur Dias. Email, phone, location. Open to product design work and partnership opportunities.',
  openGraph: {
    title: 'Contact | Arthur Dias',
    url: 'https://arthurdias.dev/contact',
  },
  alternates: { canonical: 'https://arthurdias.dev/contact' },
}

export default async function Contact() {
  return (
    <PageWrapper className="flex min-h-[calc(100vh-8rem)] w-full flex-col gap-10 pb-12 md:pb-16">
      <PageHeader label="Get in touch" title="Contact" />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <ContactCard type="email" info="arthursantos01@gmail.com" />
          <ContactCard type="phone" info="+1 (980) 269-9602" />
          <ContactCard type="address" info="São Paulo, SP" />
        </div>
        <Card className="border-l-4 border-l-primary-500/60 dark:border-l-primary-400/60">
          <CardContent className="flex flex-col gap-4 p-6">
            <GeneralContactCard
              text="I'm always open to discussing product design work or partnership opportunities."
              emphasized="Let's change the world through elegant data-driven apps."
            />
            <ScheduleAmeet />
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
