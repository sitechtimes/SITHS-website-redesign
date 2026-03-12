import {defineField, defineType} from 'sanity'

export const eleventhTwelfthGrade = defineType({
  name: 'eleventhTwelfthGrade',
  title: '11th & 12th Grade Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'ex: Engineering, Digital Arts, Information Technology',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      description: 'ex: "Advanced Computer Science"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Course Subtitle',
      type: 'string',
      description: 'ex: "2 Terms • Elective"',
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
      description: 'Main paragraph describing course',
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
      description: 'Order within a category (lower numbers first)',
    }),
  ],
  orderings: [
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})
