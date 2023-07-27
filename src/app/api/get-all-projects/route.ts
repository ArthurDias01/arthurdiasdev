import { NextResponse } from 'next/server'
import { getProjects } from '../../../lib/contentapi'

export async function GET(request: Request) {
  const data = await getProjects()

  return NextResponse.json(data)
}
