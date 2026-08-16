import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

const baseComponents = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-muted" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="link-underline text-copper focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-copper"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 list-outside list-disc pl-6 text-muted" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="my-4 list-outside list-decimal pl-6 text-muted"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="my-1" {...props} />
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-8 font-display text-3xl text-ink" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 font-display text-2xl text-ink" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 font-display text-xl text-ink" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium text-ink" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt = "", width, height, ...rest } = props;
    if (!src || typeof src !== "string") return null;
    const isExternal = src.startsWith("http") || src.startsWith("//");
    return (
      <span className="my-6 block overflow-hidden">
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
    );
  },
  video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
    <span className="my-6 block overflow-hidden">
      <video {...props} controls playsInline className="w-full" />
    </span>
  ),
};

interface MdxContentProps {
  source: string;
  className?: string;
}

export function MdxContent({ source, className }: MdxContentProps) {
  return (
    <div className={className}>
      <MDXRemote source={source} components={baseComponents} />
    </div>
  );
}
