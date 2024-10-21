import {defineField, defineType} from 'sanity'

export const courses = defineType({
  name: 'courses',
  title: 'AP Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Course Name',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'periodNumber',
              title: 'Period Number',
              type: 'number',
            }),
            defineField({
              name: 'grade',
              title: 'Student Grade',
              type: 'number',
            }),
            defineField({
              name: 'description',
              title: 'Course Description',
              type: 'string',
            }),
          ],
        },
      ],
      options: {
        layout: 'table',
      },
    }),
  ],
})
