'use client'
import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

interface Props {
  images: {
    url: string
    alt: string
    width: number
    height: number
  }[]
}

const properties = {
  prevArrow: (
    <button className="ml-4 h-full drop-shadow-lg  md:ml-20">
      <ArrowCircleLeft
        className="h-8 w-8 rounded-full bg-black/30 text-white"
        size={32}
      />
    </button>
  ),
  nextArrow: (
    <button className="mr-4 h-full drop-shadow-lg  md:mr-20">
      <ArrowCircleRight
        className="h-8 w-8 rounded-full bg-black/30 text-white"
        size={32}
      />
    </button>
  ),
}

export const Carousel = ({ images }: Props) => {
  return (
    <Slide {...properties} transitionDuration={300}>
      {images.map((image) => (
        <div className="each-slide-effect" key={image.url}>
          <figure className="mx-auto flex w-full max-w-3xl flex-row items-center justify-center">
            <Image
              src={image.url}
              alt={image.alt}
              width={960}
              height={540}
              quality={75}
              priority
              className="aspect-video w-full rounded-[20px] object-cover"
            />
          </figure>
        </div>
      ))}
    </Slide>
  )
}
