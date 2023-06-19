const { loadEnvConfig } = require('@next/env')
const contentfulManagement = require('contentful-management')

module.exports = function () {
  loadEnvConfig(process.env.PWD)
  console.log(
    'ENVIRONMENT:',
    process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_ENVIRONMENT,
  )

  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
}
