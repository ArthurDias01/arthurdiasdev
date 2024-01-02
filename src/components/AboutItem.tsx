interface Props {
  title: string
  yearStart: string
  yearEnd: string
  description: string
  mainFrameworks?: string
  finished: boolean
  position?: string
  type: 'education' | 'experience'
}

export const AboutItem = ({
  description,
  finished,
  mainFrameworks,
  type,
  position,
  yearEnd,
  yearStart,
  title,
}: Props) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      {type === 'experience' && <p>{position}</p>}
      <p>{`${new Date(yearStart).getFullYear()} - ${
        finished ? new Date(yearEnd).getFullYear() : 'present'
      }`}</p>
      <span className="mt-2">
        {description.split('\n').map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </span>

      <p className="timeline-text mt-2">{mainFrameworks}</p>
    </li>
  )
}
