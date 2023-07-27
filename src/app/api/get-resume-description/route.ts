import { NextResponse, NextRequest } from 'next/server'
import { getResumeDescription } from '../../../lib/contentapi'

export async function GET(request: NextRequest) {
  const resumeDescription = await getResumeDescription()

  return NextResponse.json(resumeDescription)
}
