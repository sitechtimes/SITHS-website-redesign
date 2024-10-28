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
      name: 'grade',
      title: 'Course Grade',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'string',
    }),
  ],
  options: {
    layout: 'card',
  },
})
