interface PageHeaderProps {
  label: string;
  title: string;
  /** Optional: hide the label from visual (e.g. for sr-only) */
  labelSrOnly?: boolean;
}

export function PageHeader({ label, title, labelSrOnly }: PageHeaderProps) {
  return (
    <header className="mb-2">
      <p
        className={
          labelSrOnly
            ? "sr-only"
            : "text-xs font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-400"
        }
      >
        {label}
      </p>
      <h1 className="mt-1.5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl">
        {title}
      </h1>
      <div
        className="mt-3 h-1 w-16 rounded-full bg-primary-500/90 dark:bg-primary-400/90"
        aria-hidden
      />
    </header>
  );
}
