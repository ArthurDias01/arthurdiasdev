import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  // get host from request
  const thisURl = new URL(request.url)
  const domain = thisURl.host
  const response = NextResponse.next()

  response.headers.set('Access-Control-Allow-Origin', `${domain}`)
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization',
  )
  response.headers.set('Access-Control-Max-Age', '86400')

  return response
}

export const config = {
  matcher: '/api/:path*',
}
