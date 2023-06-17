interface Props {
  text: string
  emphasized: string
}

export const GeneralContactCard = ({ text, emphasized }: Props) => {
  return (
    <section className="text-white flex flex-row p-4 bg-neutral-500 dark:bg-neutral-900 rounded-[20px]">
      <p className="text-2xl">
        {text}
        <br />
        <span className="text-primary-400 font-bold">{emphasized}</span>
      </p>
    </section>
  )
}
