import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-auto flex w-full flex-wrap items-center justify-center gap-2 border-t border-neutral-200/60 bg-neutral-100/80 px-4 py-8 pr-32 text-center text-sm text-neutral-600 backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-900/50 dark:text-neutral-400"
      role="contentinfo"
    >
      <span>© {year} Arthur Dias.</span>
      <span aria-hidden>·</span>
      <Link
        href="/contact"
        className="underline underline-offset-2 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:hover:text-primary-400"
      >
        Contact
      </Link>
    </footer>
  );
};
