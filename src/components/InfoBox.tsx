'use client'
import { InstagramLogo, TwitterLogo, LinkedinLogo, GithubLogo, ReadCvLogo, Phone, Envelope, MapPin } from '@phosphor-icons/react'
import { InfoSubSection } from './InfoSubSection'
import { PrimaryButton } from './PrimaryButton'

export const InfoBox = () => {

  const handleDownloadCV = () => {
    window.open('/assets/cv/01Arthur-Dias-FullStack-F-Resume.pdf', '_blank')
  }

  return (
    <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-neutral-900 px-6 rounded-[20px] mt-[120px] md:mt-[220px] lg:mt-0 pt-24 pb-12">
      <div className="flex flex-col gap-2 w-full text-neutral-200 font-bold pt-8 justify-center ">
        <div className="flex flex-col gap-2 max-w-[240px] mx-auto">
          <h1 className="text-2xl text-center">Arthur Dias</h1>
          <h2 className="text-sm bg-neutral-800 p-2 px-4 font-normal text-center rounded-lg">Full Stack Software Engineer</h2>
        </div>

        <section className="flex flex-row gap-2 justify-between w-full max-w-[240px] pt-2 mx-auto my-4">
          <h3 className="text-sm">
            <a href="https://linkedin.com/in/arthurdias" target="_blank" referrerPolicy='no-referrer'>
              <LinkedinLogo className="inline-block w-8 h-8 mr-2 hover:text-primary-500" />
            </a>
          </h3>
          <h3 className="text-sm">
            <a href="https://twitter.com/ArthurODS_" target="_blank" referrerPolicy='no-referrer'>
              <TwitterLogo className="inline-block w-8 h-8 mr-2 hover:text-primary-500" />
            </a>
          </h3>
          <h3 className="text-sm">
            <a href="https://www.instagram.com/arthurddias/">
              <InstagramLogo className="inline-block w-8 h-8 mr-2 hover:text-primary-500" />
            </a>
          </h3>
          <h3 className="text-sm">
            <a href="https://github.com/ArthurDias01">
              <GithubLogo className="inline-block w-8 h-8 mr-2 hover:text-primary-500" />
            </a>
          </h3>
          <h3 className="text-sm">
            <a href="/assets/cv/01Arthur-Dias-FullStack-F-Resume.pdf"
              target="_blank"
              title="Baixar CV"
              download
            >
              <ReadCvLogo className="inline-block w-8 h-8 mr-2 hover:text-primary-500" />
            </a>
          </h3>
        </section>

        <section className="bg-neutral-700 p-4 flex flex-col gap-4 mx-2 rounded-md">
          <InfoSubSection
            icon={<Phone className="inline-block w-8 h-8 text-primary-500" />}
            title="Telefone"
            info="+55 (11) 95279-5920"
            hasLink
            linktype="tel"
            href="+5511952795920"
          />

          <InfoSubSection
            icon={<Envelope className="inline-block w-8 h-8 text-primary-500" />}
            title="Email"
            info="arthursantos01@gmail.com"
            hasLink
            linktype="mailto"
            href="arthursantos01@gmail.com"
          />

          <InfoSubSection
            icon={<MapPin className="inline-block w-8 h-8 text-primary-500" />}
            title="Location"
            info="São Paulo, SP - Brazil"
          />
        </section>

        <PrimaryButton text='Download CV' className="mt-4 max-w-[240px] flex-1 mx-auto"
          handleClick={handleDownloadCV}
        />
      </div>
    </div>
  )
}
