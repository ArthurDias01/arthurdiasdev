import Image from 'next/image'
import { InfoBox } from './InfoBox'

export const ProfileBox = () => {
  return (
    <div className="flex flex-col justify-center py-4 w-full md:max-w-[332px] -mt-[120px] md:-mt-48 lg:mt-[28px]">
      <Image
        src="/myProfile.jpg"
        alt="Arthur Dias"
        width={240}
        height={240}
        className="aspect-square z-10 w-[240px] relative top-[14rem] md:top-[20rem] lg:top-[6rem] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
      />
      <InfoBox />
    </div>
  )
}
