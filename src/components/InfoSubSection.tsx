
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
    <div className="flex flex-row w-full items-center gap-4">
      <div className="flex flex-row w-14 h-14 bg-neutral-800 justify-center items-center rounded-md">
        {icon}
      </div>
      <div className="flex flex-col items-start">
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
                } target="_blank" rel="noreferrer">{info}</a>
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
