import { defineField, defineType } from 'sanity';

export const terrusa = defineType({
  name: 'terrusa',
  title: "Terrusa Announcements",
  type: 'document',
  fields: [
    defineField({
      name: 'PostTitle',
      title: 'Post Title',
      type: 'string',
    }),
    defineField({
        name: 'author',
        title: 'Author',
        type: 'string',
      }),
    defineField({
        name: 'date',
        title: 'Date',
        type: 'string',
      }),
    defineField({
        name: 'description',
        title: 'Description',
        description: 'Max words 400',
        type: 'text',
        rows: 12
      }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      }),
  ],
});
