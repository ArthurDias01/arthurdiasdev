import { NextResponse, NextRequest } from 'next/server'
import { getExperience } from '../../../lib/contentapi'

export async function GET(request: NextRequest) {
  const data = await getExperience()

  return NextResponse.json({ data })
}
