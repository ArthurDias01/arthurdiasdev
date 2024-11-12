'use client'
import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  ReadCvLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import { InfoBoxIconLink } from './InfoBoxIconLink'
import { InfoSubSection } from './InfoSubSection'
import { PrimaryButton } from './PrimaryButton'

export const InfoBox = () => {
  const handleDownloadCV = () => {
    window.open('/assets/cv/01Arthur-Dias-FullStack-F-Resume.pdf', '_blank')
  }

  return (
    <article className="relative mx-auto mb-6 mt-[120px] w-full rounded-[20px] bg-neutral-300 px-6 pb-12 pt-24 text-center  ease-in-out md:mt-[220px] lg:mb-0 lg:mt-0 dark:bg-neutral-950">
      <section className="flex w-full flex-col justify-center gap-2 py-8 font-bold ">
        <section className="mx-auto flex max-w-[240px] flex-col gap-2">
          <h1 className="text-center text-2xl">Arthur Dias</h1>
          <h2 className="rounded-lg bg-neutral-400 p-2 px-4 text-center text-sm dark:bg-neutral-800">
            Full Stack Software Engineer
          </h2>
        </section>

        <section className="mx-auto my-4 flex w-full max-w-[240px] flex-row justify-between gap-2 pt-2">
          <InfoBoxIconLink
            icon={
              <LinkedinLogo className="mr-2 inline-block h-8 w-8 transition-colors  hover:text-primary-400" />
            }
            href="https://linkedin.com/in/arthur-dias/"
            label="LinkedIn"
          />

          <InfoBoxIconLink
            icon={
              <TwitterLogo className="mr-2 inline-block h-8 w-8 transition-colors  hover:text-primary-400" />
            }
            href="https://twitter.com/ArthurODS_"
            label="Twitter"
          />

          <InfoBoxIconLink
            icon={
              <InstagramLogo className="mr-2 inline-block h-8 w-8 transition-colors  hover:text-primary-400" />
            }
            href="https://www.instagram.com/arthurddias/"
            label="Instagram"
          />

          <InfoBoxIconLink
            icon={
              <GithubLogo className="mr-2 inline-block h-8 w-8 transition-colors  hover:text-primary-400" />
            }
            href="https://github.com/ArthurDias01"
            label="Github"
          />

          <h3 className="text-sm">
            <a
              href="/assets/cv/01Arthur-Dias-FullStack-F-Resume.pdf"
              target="_blank"
              title="Download CV"
              download
            >
              <ReadCvLogo className="mr-2 inline-block h-8 w-8 transition-colors  hover:text-primary-400" />
            </a>
          </h3>
        </section>

        <section className="mx-auto flex max-w-md flex-col gap-4 truncate rounded-md bg-neutral-400 p-4 dark:bg-neutral-900">
          <InfoSubSection
            icon={<Phone className="inline-block h-8 w-8 text-primary-400" />}
            title="Telefone"
            info="+1 (980) 269-9602"
            hasLink
            linktype="tel"
            href="+19802699602"
          />

          <InfoSubSection
            icon={
              <Envelope className="inline-block h-8 w-8 text-primary-400" />
            }
            title="Email"
            info="arthursantos01@gmail.com"
            hasLink
            linktype="mailto"
            href="arthursantos01@gmail.com"
          />

          <InfoSubSection
            icon={<MapPin className="inline-block h-8 w-8 text-primary-400" />}
            title="Location"
            info="São Paulo, SP - Brazil"
          />
        </section>

        <PrimaryButton
          text="Download CV"
          className="mx-auto mt-4 max-w-[240px] flex-1"
          handleClick={handleDownloadCV}
        />
      </section>
    </article>
  )
}
