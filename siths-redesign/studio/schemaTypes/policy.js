import {defineField, defineType} from 'sanity'

export const policies = defineType({
  name: 'policys',
  title: 'School Policies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Individual policy',
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
