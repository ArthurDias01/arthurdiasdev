import Image from "next/image";
import { InfoBox } from "./InfoBox";

export const ProfileBox = () => {
  return (
    <div className="flex flex-col justify-center py-4 w-full">
      <Image
        src='/myProfile.jpg'
        alt='Arthur Dias'
        width={240}
        height={240}
        className="z-10 w-[240px] absolute left-[50%] transform -translate-x-[50%] -translate-y-[80%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
      />
      <InfoBox />
    </div>
  )
};
