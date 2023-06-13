import { createClient } from 'contentful'
import { IAuthor } from '../@types/contentful';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  retryLimit: 3,
  retryOnError: true,
  headers: {
    'X-Contentful-User-Agent': 'contentful.js/12.3.0',
    'cache-control': 'only-cache',
  },
});

export const getResumeDescription = async () => {
  const entries = await client.getEntries<IAuthor, string>({
    content_type: 'author',
    limit: 1,
  });
  return entries.items[0].fields as any;
};

export const getJobTypes = async () => {
  const entries = await client.getEntries({
    content_type: 'jobTypes',
  });
  return entries.items.map((item) => item.fields) as any;
}
