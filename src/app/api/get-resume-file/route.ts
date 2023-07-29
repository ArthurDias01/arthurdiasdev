import { NextResponse } from 'next/server'
import { getResume } from '../../../lib/contentapi'

export async function GET() {
  const data = await getResume()

  return NextResponse.json({ data })
}
