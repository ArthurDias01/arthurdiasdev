import { NextResponse } from 'next/server'
import { getExperience } from '../../../lib/contentapi'

export async function GET() {
  const data = await getExperience()

  return NextResponse.json({ data })
}
