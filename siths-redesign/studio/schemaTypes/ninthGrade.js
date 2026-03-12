import {defineField, defineType} from 'sanity'

export const ninthGrade = defineType({
  name: 'ninthGrade',
  title: '9th Grade Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      description: 'example: "Intro to Technology & Careers Lab"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Course Subtitle',
      type: 'string',
      description: 'example: "2 terms (1 day per week) • Required"',
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
      description: 'Main paragraph describing the course',
    }),
    defineField({
      name: 'list',
      title: 'Bullet Point List',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Optional list of bullet points',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Link Text', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
      description: 'Optional links related to the course',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which courses appear (lower numbers first)',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
