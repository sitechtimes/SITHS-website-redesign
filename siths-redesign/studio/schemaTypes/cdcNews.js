export const cdcNews = defineType({
  name: 'cdcNews',
  title: 'CDC in the News',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Article headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link to article',
      type: 'url',
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
