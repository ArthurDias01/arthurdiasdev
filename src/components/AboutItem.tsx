interface Props {
  title: string;
  yearStart: string;
  yearEnd: string;
  description: string;
  mainFrameworks?: string;
  finished: boolean;
  position?: string;
  type: "education" | "experience";
}

function yearLabel(value: string, finished: boolean) {
  if (!finished || value === "present") return "present";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return String(parsed.getFullYear());
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
  const start = new Date(yearStart).getFullYear();
  const end = yearLabel(yearEnd, finished);

  return (
    <li className="timeline-item">
      <h3 className="font-display text-xl text-ink md:text-2xl">{title}</h3>
      {type === "experience" && position ? (
        <p className="mt-1 text-sm text-copper">{position}</p>
      ) : null}
      <p className="mt-2 text-[0.7rem] uppercase tracking-label text-muted">
        {start} – {end}
      </p>
      <div className="timeline-text mt-3 space-y-2 text-sm">
        {description.split("\n").map((item, i) =>
          item.trim() ? <p key={i}>{item}</p> : null,
        )}
      </div>
      {mainFrameworks ? (
        <p className="mt-3 text-sm text-muted">{mainFrameworks}</p>
      ) : null}
    </li>
  );
};
