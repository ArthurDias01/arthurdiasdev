import Image from "next/image";
import myProfile from "@/public/myProfile.jpg";
import { InfoBox } from "./InfoBox";

export const ProfileBox = () => {
  return (
    <section className="flex w-full flex-col gap-6" aria-label="Profile">
      <div className="relative mx-auto w-fit">
        <div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-400/40 to-primary-600/30 opacity-80 blur-sm dark:from-primary-500/30 dark:to-primary-400/20"
          aria-hidden
        />
        <Image
          src={myProfile}
          alt="Arthur Dias – Senior Full Stack Software Engineer"
          placeholder="blur"
          blurDataURL={myProfile.blurDataURL}
          width={280}
          height={280}
          quality={85}
          priority
          className="relative z-10 aspect-square w-full max-w-[280px] rounded-2xl border-2 border-white object-cover shadow-xl ring-2 ring-primary-500/10 dark:border-neutral-800 dark:ring-primary-400/10"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <InfoBox />
    </section>
  );
};
