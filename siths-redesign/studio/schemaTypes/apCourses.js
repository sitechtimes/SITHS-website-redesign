import {defineField, defineType} from 'sanity'

export const apCourses = defineType({
  name: 'apCourses',
  title: 'AP Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'courseName',
              title: 'Course Name',
              type: 'string',
            }),

            defineField({
              name: 'grades',
              title: 'Grades Taken',
              type: 'string',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
              options: {
                list: [
                  {title: '9th', value: 'freshman'},
                  {title: '10th', value: 'sophomore'},
                  {title: '11th', value: 'junior'},
                  {title: '12th', value: 'senior'},
                ],
                layout: 'grid',
              },
            }),
            defineField({
              name: 'description',
              title: 'Description Link',
              type: 'url',
            }),
            defineField({
              name: 'basedOn',
              title: 'Selection Basis',
              type: 'array',
              of: [
                {
                  type: 'block',
                  marks: {},
                },
              ],
            }),
          ],
        },
      ],
      options: {
        layout: 'table',
      },
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
  ],
})
