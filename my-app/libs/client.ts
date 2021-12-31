import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'portfolio-hippopotacos',
  apiKey: process.env.API_KEY
});