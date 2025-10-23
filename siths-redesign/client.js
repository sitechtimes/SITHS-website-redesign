import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'cb6mdrtg',
  dataset: 'website-data',
  useCdn: true, // set to false to bypass the edge cache
  apiVersion: '2025-10-01', // use a fixed date for API versioning
})

