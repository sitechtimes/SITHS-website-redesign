import {defineField, defineType} from 'sanity'
export const pta = defineType({
  name: 'pta',
  title: 'PTA',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'home',
      title: 'Home',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          lists: [
            {title: 'Numbered', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{name: 'href', type: 'url', title: 'URL'}],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'bake sales',
      title: 'Bake Sales',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          lists: [
            {title: 'Numbered', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{name: 'href', type: 'url', title: 'URL'}],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'communications',
      title: 'Communications',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          lists: [
            {title: 'Numbered', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{name: 'href', type: 'url', title: 'URL'}],
              },
            ],
          },
        },
      ],
    }),
  ],
})
