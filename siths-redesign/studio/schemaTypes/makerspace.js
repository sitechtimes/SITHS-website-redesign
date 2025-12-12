import {defineField, defineType} from 'sanity'

export const makerspace = defineType({
  name: 'makerspace',
  title: 'Makerspace',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Article Headline',
      type: 'string',
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
      title: 'Article Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Article Link',
      type: 'url',
      description: 'Optional link to an outside article',
    }),
  ],
})
