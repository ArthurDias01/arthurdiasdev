import { NextResponse, NextRequest } from 'next/server'
import { getEducation } from '../../../lib/contentapi'

export async function GET(request: NextRequest) {
  const education = await getEducation()

  return NextResponse.json(education)
}
