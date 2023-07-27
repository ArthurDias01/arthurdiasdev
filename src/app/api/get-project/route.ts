import { NextResponse } from 'next/server'
import { getProject } from '../../../lib/contentapi'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  if (!searchParams) {
    return NextResponse.error()
  }

  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.error()
  }

  const data = await getProject(id)

  return NextResponse.json({ data })
}
