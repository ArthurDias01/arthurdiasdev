import { headers } from 'next/headers'
export const revalidate: number = 300 // seconds to revalidate data on nextjs

export const domain = () => {
  const headersInstance = headers() as any
  const hostAddress = `${
    process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
  }${headersInstance.get('host')}`
  return hostAddress
}
