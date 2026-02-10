interface Props {
  title: string;
  experienceYearStart: string;
  experienceYearEnd: string;
  experienceDescription: string;
}

export const EducationItem = ({
  experienceDescription,
  experienceYearEnd,
  experienceYearStart,
  title,
}: Props) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>

      <p>{`${experienceYearStart} - ${experienceYearEnd}`}</p>
      <span className="mt-2">{experienceDescription}</span>
    </li>
  );
};
