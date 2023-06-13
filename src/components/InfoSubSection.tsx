
interface Props {
  icon: React.ReactNode;
  title: string;
  info: string;
  hasLink?: boolean;
  linktype?: 'tel' | 'mailto' | 'link';
  href?: string;
}


export const InfoSubSection = ({ icon, info, title, linktype, hasLink, href }: Props) => {

  return (
    <div className="flex flex-row w-full items-center gap-4 max-w-[280px]">
      <div className="flex flex-row w-14 h-14 bg-neutral-500 dark:bg-neutral-950 p-3 justify-center items-center rounded-md">
        {icon}
      </div>
      <div className="flex flex-col items-start w-full">
        <h3 className="text-sm">{title}</h3>
        <h4 className="text-sm font-normal">
          {
            hasLink ?
              (
                <a href={
                  linktype === "link" ? href :
                    linktype === "tel" ? `tel:${href}` :
                      linktype === "mailto" ? `mailto:${href}` :
                        ""
                } target="_blank" rel="noreferrer" className="underline ">{info}</a>
              )
              :
              (
                <span>{info}</span>
              )
          }
        </h4>
      </div>
    </div>
  )
}
