"use client";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  href: string;
  label: string;
}

export const InfoBoxIconLink = ({ icon, href, label }: Props) => {
  return (
    <li className="text-sm">
      <a
        href={href}
        target="_blank"
        referrerPolicy="no-referrer"
        aria-label={label}
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 transition-colors hover:bg-primary-500/10 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-neutral-400 dark:hover:bg-primary-500/20 dark:hover:text-primary-400"
      >
        {icon}
      </a>
    </li>
  );
};
