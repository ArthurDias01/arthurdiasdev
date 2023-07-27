import { NextResponse } from 'next/server'
import { getJobTypes } from '../../../lib/contentapi'

export async function GET() {
  const data = await getJobTypes()

  return NextResponse.json({ data })
}
