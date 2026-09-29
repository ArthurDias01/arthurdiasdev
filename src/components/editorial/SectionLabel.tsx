import { cn } from "@/src/utils/cn";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-8 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted",
        className,
      )}
    >
      <span className="text-copper">//</span> {children}
    </p>
  );
}
