# Portfolio content (MDX + JSON)

Content is read at build/request time from this directory. No CMS required.

## Structure

- **`resume.mdx`** — Summary section (frontmatter: `title`; body: MDX).
- **`job-types.json`** — Array of `{ "job": string, "jobDescription": string }`.
- **`education/*.mdx`** — One file per entry. Frontmatter: `title`, `startYear`, `endDate`, `finished`, `mainFrameworks`. Body: description text.
- **`experience/*.mdx`** — One file per entry. Frontmatter: `title`, `position`, `startYear`, `endDate`, `finished`. Body: description text.
- **`projects/*.mdx`** — One file per project. Filename = URL slug (e.g. `piggybank.mdx` → `/projects/piggybank`).  
  Frontmatter: `title`, `category` (Web | Mobile | All | "Web, Mobile"), `link`, `date`, `featuredImage` (path in `public/` or full URL), optional `carouselImages` (array of paths/URLs). Body: MDX description.

## Images

Put images in `public/` and reference by path (e.g. `featuredImage: '/projects/hero.jpg'`). For external images, use full URLs and add the host to `next.config.js` → `images.remotePatterns` if needed.
