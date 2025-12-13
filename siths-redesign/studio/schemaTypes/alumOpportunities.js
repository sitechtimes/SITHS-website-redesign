import {defineField, defineType} from 'sanity'

export const alumOpportunities = defineType({
  name: 'alumOpportunities',
  title: 'Alumni Opportunities',
  type: 'document',
  fields: [
    defineField({
      name: 'postTitle',
      title: 'Title',
      type: 'string',
      description: 'Enter a clear, concise title for this opportunity.',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional: a short subtitle or tagline for this post.',
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Enter the date and time for this opportunity.',
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
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
          ],
          // Only allow numbered lists
          lists: [{title: 'Numbered', value: 'number'}],
          marks: {
            // Only allow these decorators
            decorators: [{title: 'Strong', value: 'strong'}],
          },
        },
      ],
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      description: 'Additional images related to this opportunity.',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Alternative text for this image.',
            },
          ],
        },
      ],
    }),
  ],
})
