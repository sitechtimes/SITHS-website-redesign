import { defineField, defineType } from 'sanity';

export const nhs = defineType({
  name: 'nhs',
  title: 'National Honor Society',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          // Only allow these block styles
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' }
          ],
          // Only allow numbered lists
          lists: [
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: 'Strong', value: 'strong' },
            ]
          }
        }
      ]
    }),

    defineField({
      name: 'opportunities',
      title: 'Opportunities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                  // block styles
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H1', value: 'h1' },
                    { title: 'H2', value: 'h2' }
                  ],
                  // numbered lists
                  lists: [
                    { title: 'Numbered', value: 'number' }
                  ],
                  marks: {
                    // decorators
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                    ]
                  }
                }
              ]
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
          ],
        },
      ],
      options: {
        layout: 'table',
      },
    }),
  ],
});
