import {defineField, defineType} from 'sanity'

export const apCourses = defineType({
  name: 'apCourses',
  title: 'AP',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          lists: [{title: 'Numbered', value: 'number'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
          },
        },
      ],
    }),
    defineField({
      name: 'subnote',
      title: 'Note',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Emphasis', value: 'em'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description Link',
      type: 'url',
    }),
  ],
})
