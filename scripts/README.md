# Scripts

## scrape-contentful

Fetches all portfolio content from Contentful and writes it to the `content/` folder (resume, job types, education, experience, projects) as MDX and JSON.

**Requirements**

- `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` in `.env` or `.env.local` (Content Delivery API token).

**Run**

```bash
bun run scrape:contentful
```

Or directly:

```bash
bun run scripts/scrape-contentful.ts
```

**Output**

- `content/resume.mdx` — author summary (title + body from rich text).
- `content/job-types.json` — array of job type entries.
- `content/education/*.mdx` — one file per education entry (slug from title).
- `content/experience/*.mdx` — one file per experience entry (slug from title).
- `content/projects/*.mdx` — one file per project (slug from project name); `featuredImage` and `carouselImages` use full Contentful asset URLs.

Run this once to migrate from Contentful, then edit the generated files in `content/` as needed.
