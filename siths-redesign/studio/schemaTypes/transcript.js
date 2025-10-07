import {defineField, defineType} from 'sanity'

export const transcript = defineType({
  name: 'transcript',
  title: 'Transcript Request',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
