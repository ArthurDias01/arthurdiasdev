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
        "mb-8 text-[0.7rem] font-medium uppercase tracking-label text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
