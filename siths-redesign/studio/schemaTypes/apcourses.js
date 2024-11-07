import {defineField, defineType} from 'sanity'

export const courses = defineType({
  name: 'courses',
  title: 'AP Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Course Name',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Course cards',
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
              name: 'courseGrade',
              title: 'Course Grade',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
