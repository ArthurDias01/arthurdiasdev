import { ReactNode } from "react";
interface Props {
  icon: ReactNode;
  title: string;
  info: string;
  hasLink?: boolean;
  linktype?: "tel" | "mailto" | "link";
  href?: string;
}

export const InfoSubSection = ({
  icon,
  info,
  title,
  linktype,
  hasLink,
  href,
}: Props) => {
  return (
    <div className="flex w-full max-w-[280px] flex-row items-center gap-4">
      <div className="flex h-14 w-14 flex-row items-center justify-center rounded-md bg-neutral-500 p-3 dark:bg-neutral-950">
        {icon}
      </div>
      <div className="flex w-full flex-col items-start">
        <h3 className="text-sm">{title}</h3>
        <h4 className="text-sm font-normal">
          {hasLink ? (
            <a
              href={
                linktype === "link"
                  ? href
                  : linktype === "tel"
                    ? `tel:${href}`
                    : linktype === "mailto"
                      ? `mailto:${href}`
                      : ""
              }
              target="_blank"
              rel="noreferrer"
              className="underline "
            >
              {info}
            </a>
          ) : (
            <span>{info}</span>
          )}
        </h4>
      </div>
    </div>
  );
};
