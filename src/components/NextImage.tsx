import Image, { ImageProps } from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

export async function NextImage({ src, alt, ...rest }: ImageProps) {
  const imgBuffer = await fetch(src as any).then((res) => res.arrayBuffer())
  const buffer = Buffer.from(new Uint8Array(imgBuffer))
  const { base64 } = await getPlaiceholder(buffer)
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
