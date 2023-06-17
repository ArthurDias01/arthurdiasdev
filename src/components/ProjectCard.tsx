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
    <div className="flex flex-col w-full h-full max-w-md  bg-neutral-500 dark:bg-neutral-900 rounded-[20px] gap-4 animate-scaleUp duration-300 overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        <Link href={`/project/${id}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={340}
            height={240}
            className="aspect-video w-full object-cover cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 h-auto"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center px-4 pb-4">
        <h3 className="text-md text-neutral-200 dark:text-neutral-300">
          {category}
        </h3>
        <h2 className="text-lg text-primary-400 font-semibold">{title}</h2>
      </div>
    </div>
  )
}
