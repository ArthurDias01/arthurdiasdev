import { PRINCIPLES } from "@/src/lib/site";
import { SectionLabel } from "./SectionLabel";

export function Principles() {
  return (
    <section
      id="principles"
      className="scroll-mt-24 border-b border-rule py-20 md:py-28"
      aria-labelledby="principles-heading"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <SectionLabel>Principles</SectionLabel>
          <h2
            id="principles-heading"
            className="font-display text-3xl tracking-tight text-ink md:text-4xl"
          >
            How I think
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Not a skills list. A few beliefs that survive contact with real
            systems.
          </p>
        </div>

        <ol className="md:col-span-8">
          {PRINCIPLES.map((principle, index) => (
            <li
              key={principle}
              className="flex gap-6 border-t border-rule py-6 last:border-b"
            >
              <span className="w-8 shrink-0 pt-1 text-[0.7rem] tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-xl leading-snug text-ink md:text-2xl">
                {principle}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
