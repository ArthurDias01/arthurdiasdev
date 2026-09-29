import { QUOTE } from "@/src/lib/site";

export function Quote() {
  return (
    <section
      className="border-b border-rule py-24 md:py-36"
      aria-label="Quote"
    >
      <blockquote className="mx-auto max-w-3xl text-center">
        <span
          className="mb-6 block font-display text-6xl leading-none text-copper md:text-7xl"
          aria-hidden
        >
          “
        </span>
        <p className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-snug text-ink text-balance">
          {QUOTE.text}
        </p>
        <footer className="mt-10 text-[0.7rem] uppercase tracking-label text-muted">
          — {QUOTE.attribution}
        </footer>
      </blockquote>
    </section>
  );
}
