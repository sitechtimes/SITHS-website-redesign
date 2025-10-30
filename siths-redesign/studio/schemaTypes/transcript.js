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
    defineField({
      name: 'email_instr',
      title: 'Email Instructions',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'edu_ver',
      title: 'Education Verification',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
