import { NextResponse } from 'next/server'
import { getProject } from '../../../../lib/contentapi'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params

  if (!slug) {
    return NextResponse.error()
  }

  const data = await getProject(slug)

  return NextResponse.json({ data })
}
