import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'siths-redesign',

  projectId: 'cb6mdrtg',
  dataset: 'website-data',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
