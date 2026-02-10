interface Props {
  text: string;
  emphasized: string;
}

export const GeneralContactCard = ({ text, emphasized }: Props) => {
  return (
    <p className="text-lg text-neutral-700 dark:text-neutral-300">
      {text}{" "}
      <span className="font-semibold text-primary-600 dark:text-primary-400">
        {emphasized}
      </span>
    </p>
  );
};
