import Image, { ImageProps } from 'next/image'

interface Props extends ImageProps {
  base64: string
}
export function NextImage({ src, alt, base64, ...rest }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      blurDataURL={base64}
      {...rest}
      placeholder="blur"
    />
  )
}
