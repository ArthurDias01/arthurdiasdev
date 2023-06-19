import { ImageLoaderProps } from 'next/image'

export default function contentfulLoader({
  src,
  quality,
  width,
}: ImageLoaderProps) {
  const url = src.includes('http')
    ? new URL(src)
    : new URL(`https://arthurdias.dev${src}`)
  url.searchParams.set('fm', 'webp')
  url.searchParams.set('w', width.toString())
  url.searchParams.set('q', quality?.toString() || '75')
  return url.href
}