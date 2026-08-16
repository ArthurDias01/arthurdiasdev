import { SectionLabel } from "@/src/components/editorial/SectionLabel";
import { ScheduleAmeet } from "@/src/components/ScheduleAmeet";
import { SITE } from "@/src/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Arthur Dias. Open to building important systems and thoughtful partnerships.",
  openGraph: {
    title: "Contact | Arthur Dias",
    url: "https://arthurdias.dev/contact",
  },
  alternates: { canonical: "https://arthurdias.dev/contact" },
};

const channels = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    label: "GitHub",
    value: "ArthurDias01",
    href: SITE.github,
  },
  {
    label: "LinkedIn",
    value: "arthur-dias",
    href: SITE.linkedin,
  },
  {
    label: "Location",
    value: SITE.location,
    href: null,
  },
] as const;

export default async function Contact() {
  return (
    <div className="py-16 md:py-24">
      <header className="max-w-2xl border-b border-rule pb-14">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-display text-4xl tracking-tight text-ink md:text-5xl">
          Let’s talk
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          Open to discussing hard product problems, infrastructure work, and
          partnerships where clarity matters.
        </p>
      </header>

      <ul className="mt-14 max-w-xl divide-y divide-rule border-y border-rule">
        {channels.map((channel) => (
          <li
            key={channel.label}
            className="grid gap-1 py-6 sm:grid-cols-[8rem_1fr] sm:items-baseline"
          >
            <span className="text-[0.7rem] uppercase tracking-label text-muted">
              {channel.label}
            </span>
            {channel.href ? (
              <a
                href={channel.href}
                {...(channel.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link-underline text-ink"
              >
                {channel.value}
              </a>
            ) : (
              <span className="text-ink">{channel.value}</span>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-16 max-w-xl">
        <ScheduleAmeet />
      </div>
    </div>
  );
}
