export const apiPath =
  process.env.NODE_ENV === 'development'
    ? process.env.LOCAL_DOMAIN_URL!
    : process.env.DOMAIN_URL!
