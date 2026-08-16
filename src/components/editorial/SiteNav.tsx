"use client";

import { NAV_LINKS, SITE } from "@/src/lib/site";
import { cn } from "@/src/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="relative z-50 border-b border-rule/80"
      role="banner"
      data-site-nav-inner
    >
      <div className="mx-auto flex max-w-editorial items-center justify-between gap-6 px-6 py-5 md:px-10 lg:px-14">
        <Link
          href="/"
          data-site-nav-logo
          className="font-display text-xl tracking-tight text-ink transition-colors hover:text-copper md:text-2xl"
          aria-label={`${SITE.name} — home`}
        >
          {SITE.initials}
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/about"
                ? pathname.startsWith("/about")
                : link.href === "/writing"
                  ? pathname.startsWith("/writing")
                  : link.href === "/contact"
                    ? pathname.startsWith("/contact")
                    : false;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.8rem] tracking-wide text-muted transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                <span
                  className={cn(
                    "pb-0.5",
                    active && "border-b border-copper text-ink",
                  )}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="text-[0.75rem] uppercase tracking-label text-muted"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-rule px-6 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
