interface Props {
  text: string
  emphasized: string
}

export const GeneralContactCard = ({ text, emphasized }: Props) => {
  return (
    <section className="flex flex-row rounded-[20px] bg-neutral-500 p-4 text-white dark:bg-neutral-900">
      <p className="text-2xl">
        {text}
        <br />
        <span className="font-bold text-primary-400">{emphasized}</span>
      </p>
    </section>
  )
}
