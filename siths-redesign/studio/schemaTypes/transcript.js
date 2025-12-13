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
      description: 'Enter a short, descriptive title for this transcript request.',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{type: 'block'}],
      description: 'General instructions related to the transcript request.',
    }),
    defineField({
      name: 'emailInstructions',
      title: 'Email Instructions',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Instructions to include in the email sent to requesters.',
    }),
    defineField({
      name: 'educationVerification',
      title: 'Education Verification',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Details or steps required to verify education credentials.',
    }),
  ],
})
