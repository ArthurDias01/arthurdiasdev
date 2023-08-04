import { InfoBox } from './InfoBox'
import Image from 'next/image'
import myProfile from '@/public/myProfile.jpg'

export const ProfileBox = () => {
  return (
    <section className="-mt-[120px] flex w-full flex-col justify-center py-4 md:-mt-48 md:max-w-[332px] lg:mt-[28px]">
      <Image
        src={myProfile}
        alt="Arthur Dias"
        placeholder="blur"
        blurDataURL={myProfile.blurDataURL}
        width={240}
        height={240}
        quality={75}
        priority
        className="relative top-[14rem] z-10 mx-auto -mt-[140px] aspect-square h-[240px] w-[240px] rounded-[20px] drop-shadow-xl md:top-[20rem] lg:top-[6rem]"
      />
      <InfoBox />
    </section>
  )
}
