import { cn } from "@/src/utils/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-editorial px-6 md:px-10 lg:px-14",
        className,
      )}
    >
      {children}
    </div>
  );
}
