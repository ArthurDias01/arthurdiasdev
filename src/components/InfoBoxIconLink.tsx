'use client'

interface Props {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const InfoBoxIconLink = ({ icon, href, label }: Props) => {

  return (
    <h3 className="text-sm">
      <a href={href} target="_blank" referrerPolicy='no-referrer' aria-label={label}>
        {icon}
      </a>
    </h3>
  )

};
