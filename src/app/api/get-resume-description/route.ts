import { NextResponse } from 'next/server'
import { getResumeDescription } from '../../../lib/contentapi'

export async function GET() {
  const data = await getResumeDescription()

  return NextResponse.json({ data })
}
