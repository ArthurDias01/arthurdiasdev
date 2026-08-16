import { HERO, SITE } from "@/src/lib/site";
import Image from "next/image";

const R2_ASSETS = "https://pub-6b4914f7508142298cc5cb051e1e84ae.r2.dev";
const PROF_PIC_LIGHT = `${R2_ASSETS}/hero-portrait-light.png`;
const PROF_PIC_DARK = `${R2_ASSETS}/hero-portrait-dark.png`;

const social = [
  { href: SITE.github, label: "GitHub" },
  { href: SITE.linkedin, label: "LinkedIn" },
  { href: `mailto:${SITE.email}`, label: "Email" },
] as const;

export function Hero() {
  return (
    <section
      className="grid min-h-[calc(100svh-5rem)] items-center gap-12 border-b border-rule py-16 md:grid-cols-12 md:gap-10 md:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:py-24"
      aria-labelledby="hero-name"
    >
      <div className="flex flex-col justify-center md:col-span-6 lg:col-span-7">
        <h1
          id="hero-name"
          className="animate-editorial font-display text-[clamp(3.25rem,8vw,5.75rem)] font-medium leading-[0.95] tracking-tight text-ink"
        >
          {HERO.name}
        </h1>

        <p className="animate-editorial animate-editorial-delay-1 mt-8 max-w-xl font-display text-2xl leading-snug text-ink md:text-[1.75rem]">
          {HERO.lead}
        </p>

        <p className="animate-editorial animate-editorial-delay-2 mt-8 max-w-lg text-base leading-relaxed text-muted md:text-[1.05rem]">
          {HERO.statement}
        </p>

        <p className="animate-editorial animate-editorial-delay-3 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-[1.05rem]">
          {HERO.focus}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="text-[0.7rem] uppercase tracking-label text-muted">
            {SITE.location}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="link-underline text-sm text-copper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="animate-editorial animate-editorial-delay-2 md:col-span-6 lg:col-span-5">
        <figure className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-surface md:ml-auto md:max-w-none">
          <Image
            src={PROF_PIC_LIGHT}
            alt={`${SITE.name} — portrait`}
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover object-top dark:hidden"
          />
          <Image
            src={PROF_PIC_DARK}
            alt={`${SITE.name} — portrait`}
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 90vw, 40vw"
            className="hidden object-cover object-top dark:block"
          />
        </figure>
      </div>
    </section>
  );
}
