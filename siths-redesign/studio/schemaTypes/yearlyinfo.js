import { defineField, defineType } from 'sanity';

export const yearlyinfo = defineType({
  name: 'yearlyinfo',
  title: 'School Year Info',
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
        type: 'string',
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
