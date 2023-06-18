import Image from 'next/image'
import Link from 'next/link'

interface Props {
  imageSrc: string
  imageAlt: string
  title: string
  category: string
  id: string
}

export const ProjectCard = ({
  category,
  imageAlt,
  imageSrc,
  title,
  id,
}: Props) => {
  return (
    <div className="flex h-full w-full max-w-md animate-scaleUp  flex-col gap-4 overflow-hidden rounded-[20px] bg-neutral-500 duration-300 dark:bg-neutral-900">
      <div className="h-full w-full overflow-hidden">
        <Link href={`/project/${id}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={340}
            height={240}
            className="aspect-video h-auto min-h-[150px] w-full transform cursor-pointer object-cover transition duration-200 ease-in-out hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex h-fit flex-col justify-center px-4 pb-4">
        <h3 className="text-md text-neutral-200 dark:text-neutral-300">
          {category}
        </h3>
        <h2 className="text-lg font-semibold text-primary-400">{title}</h2>
      </div>
    </div>
  )
}
