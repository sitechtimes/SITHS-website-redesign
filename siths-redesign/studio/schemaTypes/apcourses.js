import {defineField, defineType} from 'sanity'

export const courses = defineType({
  name: 'courses',
  title: 'AP Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Course Subject',
      type: 'array',
    }),
    defineField({
      name: 'card',
      title: 'Course Card',
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
              type: 'number',
            }),
            defineField({
              name: 'description',
              title: 'Curse Description',
              type: 'string',
            }),
          ],
        },
      ],
      options: {
        layout: 'card',
      },
    }),
  ],
})
