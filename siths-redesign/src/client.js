import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'cb6mdrtg',
  dataset: 'website-data',
  apiVersion: '2024-09-16',
  useCdn: true //enables the use of a Content Delivery Network (CDN) for loading resources instead of local
})
