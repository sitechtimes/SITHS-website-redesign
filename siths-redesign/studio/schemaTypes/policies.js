import {defineField, defineType} from 'sanity'

export const policies = defineType({
  name: 'policies',
  title: 'School Policies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Policy Title',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Policy cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
