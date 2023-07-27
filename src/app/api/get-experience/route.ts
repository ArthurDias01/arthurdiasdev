import { NextResponse, NextRequest } from 'next/server'
import { getExperience } from '../../../lib/contentapi'

export async function GET(request: NextRequest) {
  const experience = await getExperience()

  return NextResponse.json(experience)
}
