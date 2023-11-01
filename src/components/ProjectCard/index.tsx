import Image from 'next/image'
import Link from 'next/link'

interface Props {
  imageSrc: string
  imageAlt: string
  title: string
  category: string
  id: string
  priority?: boolean
}

export const ProjectCard = ({
  category,
  imageAlt,
  imageSrc,
  title,
  id,
  priority = undefined,
}: Props) => {
  return (
    <div className="flex aspect-video h-64 w-full max-w-sm animate-scaleUp flex-col gap-2 overflow-hidden rounded-[20px] bg-neutral-500 duration-300 dark:bg-neutral-900">
      <Link
        href={`/projects/${id}`}
        className="max-h-3/4 h-full w-full overflow-hidden"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={340}
          height={240}
          className="relative h-full w-full transform cursor-pointer object-cover transition duration-300 ease-in-out hover:scale-110"
          priority={priority}
        />
      </Link>

      <div className="flex h-1/3 w-full flex-col truncate px-4 pb-4">
        <h3 className="text-sm text-neutral-200 dark:text-neutral-300">
          {category}
        </h3>
        <h2 className="text-lg font-semibold text-primary-400">{title}</h2>
      </div>
    </div>
  )
}
