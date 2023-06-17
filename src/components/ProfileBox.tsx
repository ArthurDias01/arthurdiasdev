import Image from 'next/image'
import { InfoBox } from './InfoBox'

export const ProfileBox = () => {
  return (
    <div className="-mt-[120px] flex w-full flex-col justify-center py-4 md:-mt-48 md:max-w-[332px] lg:mt-[28px]">
      <Image
        src="/myProfile.jpg"
        alt="Arthur Dias"
        width={240}
        height={240}
        className="relative top-[14rem] z-10 mx-auto -mt-[140px] aspect-square h-[240px] w-[240px] rounded-[20px] drop-shadow-xl md:top-[20rem] lg:top-[6rem]"
      />
      <InfoBox />
    </div>
  )
}
