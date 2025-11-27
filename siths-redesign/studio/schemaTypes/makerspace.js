import {defineField, defineType} from 'sanity'

export const makerspace = defineType({
  name: 'makerspace',
  title: 'Makerspace',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Article headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for the article URL (e.g., /makerspace/my-article)',
      options: {
        source: 'headline',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Brief summary shown on the card',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullContent',
      title: 'Full Article Text',
      type: 'text',
      description: 'Complete article body text displayed on the detail page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Article image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
