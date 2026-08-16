import { SITE } from "@/src/lib/site";
import Link from "next/link";

const links = [
  { href: SITE.github, label: "GitHub", external: true },
  { href: SITE.linkedin, label: "LinkedIn", external: true },
  { href: `mailto:${SITE.email}`, label: "Email", external: true },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="mt-auto border-t border-rule"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-editorial flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <p className="text-[0.7rem] uppercase tracking-label text-muted">
          {SITE.location}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external && !link.href.startsWith("mailto:")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link-underline text-sm text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/contact" className="link-underline text-sm text-ink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
