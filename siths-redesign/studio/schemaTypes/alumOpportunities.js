import {defineField, defineType} from 'sanity'

export const alumOpportunities = defineType({
  name: 'alumOpportunities',
  title: 'Alumni Opportunities',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
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
      of: [{
        type: 'image',
        title:'Image',
        options: {
        hotspot: true,
      },
    
    }
  ]
    }),
    
  ],
})
