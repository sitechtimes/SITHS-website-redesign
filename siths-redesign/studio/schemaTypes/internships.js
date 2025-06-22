import {defineField, defineType} from 'sanity'

export const internships = defineType({
  name: 'internships',
  title: 'Internships',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Numbered', value: 'number'}],
        },
      ],
    }),
  ],
})
