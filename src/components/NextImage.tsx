'use client'

import Image, { ImageProps } from 'next/image'
import contentfulLoader from '../contentfulLoader'

export function NextImage({ src, alt, ...rest }: ImageProps) {
  return <Image loader={contentfulLoader} src={src} alt={alt} {...rest} />
}
