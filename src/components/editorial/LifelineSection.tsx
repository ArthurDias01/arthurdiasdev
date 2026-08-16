"use client";

import { Lifeline } from "@/src/components/lifeline";
import type { LifelineMarker } from "@/src/components/lifeline/types";
import { SectionLabel } from "./SectionLabel";

export function LifelineSection({
  markers,
  birthYear,
  title,
}: {
  markers: LifelineMarker[];
  birthYear: number;
  title: string;
}) {
  return (
    <section
      id="timeline"
      className="scroll-mt-24 border-b border-rule py-20 md:py-28"
      aria-labelledby="timeline-heading"
    >
      <SectionLabel>Timeline</SectionLabel>
      <h2
        id="timeline-heading"
        className="max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl"
      >
        A biography in systems
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
        Not a résumé. The path from curiosity to companies — the narrative
        backbone of the work.
      </p>

      <div className="mt-12 h-[560px] md:h-[640px]">
        <Lifeline
          mode="embed"
          className="h-full"
          markers={markers}
          birthYear={birthYear}
          title={title}
        />
      </div>
    </section>
  );
}
