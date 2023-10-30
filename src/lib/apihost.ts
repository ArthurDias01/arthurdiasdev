export const apiHost =
  process.env.NODE_ENV === 'production'
    ? process.env.DOMAIN_URL
    : process.env.DEV_URL
