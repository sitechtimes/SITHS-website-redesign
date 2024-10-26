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
  ],
});
