import { defineField, defineType } from 'sanity';

export const resources = defineType({
  name: 'resources',
  title: 'Resources',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resource',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link to resource',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Student Resources', value: 'student' },
          { title: 'Staff Resources', value: 'staff' },
        ],
        layout: 'checkbox',
      },
    }),
  ],
});
