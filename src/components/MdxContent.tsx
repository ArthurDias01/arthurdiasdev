import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'

const baseComponents = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-neutral-700 dark:text-neutral-300" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-primary-600 underline underline-offset-2 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 list-outside list-disc pl-6 text-neutral-700 dark:text-neutral-300" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 list-outside list-decimal pl-6 text-neutral-700 dark:text-neutral-300" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="my-1" {...props} />,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-4 text-xl font-bold text-neutral-900 dark:text-neutral-100" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-3 text-lg font-bold text-neutral-900 dark:text-neutral-100" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt = '', width, height, ...rest } = props
    if (!src) return null
    const isExternal = src.startsWith('http') || src.startsWith('//')
    return (
      <span className="my-4 block overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={alt}
          width={width ? Number(width) : 800}
          height={height ? Number(height) : 450}
          className="w-full object-cover"
          unoptimized={isExternal}
          {...rest}
        />
      </span>
    )
  },
  video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
    <span className="my-4 block overflow-hidden rounded-xl">
      <video
        {...props}
        controls
        playsInline
        className="w-full rounded-xl"
      />
    </span>
  ),
}

interface MdxContentProps {
  source: string
  className?: string
}

export function MdxContent({ source, className }: MdxContentProps) {
  return (
    <div className={className}>
      <MDXRemote source={source} components={baseComponents} />
    </div>
  )
}
