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
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image (PNG or JPG only, please)',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'note',
              title: 'Notes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'sectionNote',
                      title: 'Notes Description',
                      type: 'string',
                    })
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
