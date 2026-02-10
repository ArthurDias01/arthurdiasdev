/**
 * Scrapes Contentful space and writes content to the /content folder.
 * Requires CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env or .env.local.
 *
 * Run: bun run scrape:contentful
 */

import { createClient } from 'contentful'
import { type Document, documentToMarkdown } from 'contentful-rich-text-to-markdown'
import { config } from 'dotenv'
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

// Load .env and .env.local from project root (cwd when run via bun run)
config({ path: join(process.cwd(), '.env') })
config({ path: join(process.cwd(), '.env.local') })

const CONTENT_DIR = join(process.cwd(), 'content')

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'item'
}

function ensureDir(dir: string): void {
  try {
    mkdirSync(dir, { recursive: true })
  } catch {
    // already exists
  }
}

function writeMdx(filePath: string, frontmatter: Record<string, unknown>, body: string): void {
  const lines = ['---']
  for (const [key, value] of Object.entries(frontmatter)) {
    if (value === undefined || value === null) continue
    if (typeof value === 'string') {
      const needsQuotes = value.includes(':') || value.includes('\n') || value === ''
      lines.push(needsQuotes ? `${key}: "${value.replace(/"/g, '\\"')}"` : `${key}: ${value}`)
    } else if (typeof value === 'number') {
      lines.push(`${key}: ${value}`)
    } else if (typeof value === 'boolean') {
      lines.push(`${key}: ${value}`)
    } else if (Array.isArray(value)) {
      lines.push(`${key}: ${JSON.stringify(value)}`)
    } else {
      lines.push(`${key}: ${JSON.stringify(value)}`)
    }
  }
  lines.push('---', '', body.trim(), '')
  writeFileSync(filePath, lines.join('\n'), 'utf-8')
}

async function main() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

  if (!spaceId || !accessToken) {
    console.error('Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN in .env / .env.local')
    process.exit(1)
  }

  const client = createClient({
    space: spaceId,
    accessToken,
    retryLimit: 3,
  })

  console.log('Fetching Contentful space…')

  // --- Author → resume.mdx
  const authorRes = await client.getEntries({ content_type: 'author', limit: 1 })
  const author = authorRes.items[0]
  if (author?.fields) {
    const title = (author.fields as { title?: string }).title ?? 'Summary'
    const description = (author.fields as { description?: { nodeType: string; content?: unknown[] } }).description
    let body = ''
    if (description?.nodeType === 'document' && description.content) {
      try {
        const result = documentToMarkdown({ data: {}, ...description } as Document)
        body = result?.content ?? ''
      } catch (e) {
        console.warn('Could not convert author description to markdown:', e)
      }
    }
    writeMdx(join(CONTENT_DIR, 'resume.mdx'), { title }, body || 'Add your summary here.')
    console.log('  ✓ resume.mdx')
  }

  // --- Job types → job-types.json
  const jobTypesRes = await client.getEntries({ content_type: 'jobTypes' })
  const jobTypes = jobTypesRes.items.map((item) => {
    const f = item.fields as { job?: string; jobDescription?: string }
    return { job: f.job ?? '', jobDescription: f.jobDescription ?? '' }
  })
  writeFileSync(
    join(CONTENT_DIR, 'job-types.json'),
    JSON.stringify(jobTypes, null, 2),
    'utf-8'
  )
  console.log('  ✓ job-types.json')

  // --- Education → content/education/*.mdx
  ensureDir(join(CONTENT_DIR, 'education'))
  const educationRes = await client.getEntries({
    content_type: 'education',
    order: ['-fields.startYear'],
  })
  for (const item of educationRes.items) {
    const f = item.fields as {
      title?: string
      description?: string
      startYear?: string
      endDate?: string
      finished?: boolean
      mainFrameworks?: string
    }
    const slug = slugify(f.title ?? item.sys.id)
    writeMdx(
      join(CONTENT_DIR, 'education', `${slug}.mdx`),
      {
        title: f.title ?? '',
        startYear: f.startYear ?? '',
        endDate: f.endDate ?? undefined,
        finished: f.finished ?? true,
        mainFrameworks: f.mainFrameworks ?? undefined,
      },
      f.description ?? ''
    )
  }
  console.log(`  ✓ education (${educationRes.items.length} files)`)

  // --- Experience → content/experience/*.mdx
  ensureDir(join(CONTENT_DIR, 'experience'))
  const experienceRes = await client.getEntries({
    content_type: 'experience',
    order: ['-fields.startYear'],
  })
  for (const item of experienceRes.items) {
    const f = item.fields as {
      title?: string
      position?: string
      description?: string
      startYear?: string
      endDate?: string
      finished?: boolean
    }
    const slug = slugify(f.title ?? item.sys.id)
    writeMdx(
      join(CONTENT_DIR, 'experience', `${slug}.mdx`),
      {
        title: f.title ?? '',
        position: f.position ?? '',
        startYear: f.startYear ?? '',
        endDate: f.endDate ?? undefined,
        finished: f.finished ?? true,
      },
      f.description ?? ''
    )
  }
  console.log(`  ✓ experience (${experienceRes.items.length} files)`)

  // --- Projects → content/projects/*.mdx (with resolved assets)
  ensureDir(join(CONTENT_DIR, 'projects'))
  const projectsRes = await client.getEntries({
    content_type: 'project',
    order: ['-fields.date'],
    include: 2, // resolve linked assets (featuredMedia, carouselMedia)
  })

  for (const item of projectsRes.items) {
    const f = item.fields as {
      projectName?: string
      featuredMedia?: { fields?: { file?: { url?: string } }; sys?: { id?: string } }
      projectDescription?: { nodeType: string; content?: unknown[] }
      category?: string
      link?: string
      date?: string
      carouselMedia?: Array<{ fields?: { file?: { url?: string }; title?: string }; sys?: { id?: string } }>
    }
    const name = f.projectName ?? item.sys.id
    const slug = slugify(name)

    let featuredImage = ''
    if (f.featuredMedia?.fields?.file?.url) {
      const url = f.featuredMedia.fields.file.url
      featuredImage = url.startsWith('//') ? `https:${url}` : url
    }

    const carouselImages: string[] = []
    if (Array.isArray(f.carouselMedia)) {
      for (const media of f.carouselMedia) {
        const u = media.fields?.file?.url
        if (u) carouselImages.push(u.startsWith('//') ? `https:${u}` : u)
      }
    }

    let body = ''
    if (f.projectDescription?.nodeType === 'document' && f.projectDescription.content) {
      try {
        const result = documentToMarkdown({ data: {}, ...f.projectDescription } as Document)
        body = result?.content ?? ''
      } catch (e) {
        console.warn(`  Could not convert project "${name}" description to markdown:`, e)
      }
    }

    writeMdx(
      join(CONTENT_DIR, 'projects', `${slug}.mdx`),
      {
        title: name,
        category: f.category ?? 'All',
        link: f.link ?? '#',
        date: f.date ?? new Date().toISOString().slice(0, 10),
        featuredImage: featuredImage || '/next.svg',
        ...(carouselImages.length > 0 ? { carouselImages } : {}),
      },
      body || `Description for ${name}.`
    )
  }
  console.log(`  ✓ projects (${projectsRes.items.length} files)`)

  console.log('Done. Content written to ./content')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
