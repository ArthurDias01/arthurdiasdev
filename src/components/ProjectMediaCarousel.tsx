"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

const VIDEO_EXTENSIONS = /\.(mp4|webm|mov|ogg)(\?|$)/i;

export type ProjectMediaItem =
  | { type: "image"; url: string; alt: string }
  | { type: "video"; url: string; title?: string };

function isVideoUrl(url: string): boolean {
  return (
    VIDEO_EXTENSIONS.test(url) ||
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("vimeo.com")
  );
}

function buildMediaItem(url: string, alt: string): ProjectMediaItem {
  const normalized = url.startsWith("http")
    ? url
    : url.startsWith("/")
      ? `https://arthurdias.dev${url}`
      : `https://arthurdias.dev/${url}`;
  if (isVideoUrl(normalized)) {
    return { type: "video", url: normalized, title: alt };
  }
  return { type: "image", url: normalized, alt };
}

interface ProjectMediaCarouselProps {
  /** List of image or video URLs (e.g. from frontmatter carouselImages). */
  urls: string[];
  projectName: string;
  /** Optional: single fallback image when urls is empty. */
  fallbackImage?: string;
}

export function ProjectMediaCarousel({
  urls,
  projectName,
  fallbackImage,
}: ProjectMediaCarouselProps) {
  const items: ProjectMediaItem[] =
    urls.length > 0
      ? urls.map((url) => buildMediaItem(url, projectName))
      : fallbackImage
        ? [buildMediaItem(fallbackImage, projectName)]
        : [];

  if (items.length === 0) return null;

  const solidButtonClass =
    "h-11 w-11 min-h-[44px] min-w-[44px] rounded-full border-0 bg-white shadow-md hover:bg-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:shadow-neutral-900/50 dark:hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-primary-500";

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl">
      <Carousel opts={{ align: "center", loop: true }} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={item.url + index}>
              <figure className="relative aspect-video w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                {item.type === "image" ? (
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 896px"
                    priority={index === 0}
                  />
                ) : (
                  <video
                    src={item.url}
                    controls
                    className="aspect-video w-full object-contain"
                    title={item.title ?? projectName}
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        {items.length > 1 ? (
          <>
            <CarouselPrevious
              className={`left-2 md:left-4 ${solidButtonClass}`}
            />
            <CarouselNext
              className={`right-2 md:right-4 ${solidButtonClass}`}
            />
          </>
        ) : null}
      </Carousel>
    </div>
  );
}
