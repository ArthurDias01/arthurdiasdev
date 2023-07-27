import { NextResponse, NextRequest } from 'next/server'
import { getJobTypes } from '../../../lib/contentapi'

export async function GET(request: NextRequest) {
  const data = await getJobTypes()

  return NextResponse.json({ data })
}
