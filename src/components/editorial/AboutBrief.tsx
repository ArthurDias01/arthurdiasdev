import { ABOUT_BRIEF } from "@/src/lib/site";
import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

export function AboutBrief() {
  return (
    <section
      id="about"
      className="scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <SectionLabel>About</SectionLabel>
      <h2
        id="about-heading"
        className="font-display text-3xl tracking-tight text-ink md:text-4xl"
      >
        About me
      </h2>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
        {ABOUT_BRIEF}
      </p>
      <Link
        href="/about"
        className="link-underline mt-8 inline-block text-sm text-copper"
      >
        Full background →
      </Link>
    </section>
  );
}
