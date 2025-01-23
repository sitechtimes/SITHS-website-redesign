import { defineField, defineType } from 'sanity';

export const summerHomework = defineType({
  name: 'summerHomework',
  title: 'Summer Homework',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'homePage',
      title: 'Home',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ninth',
      title: '9th Grade Summer Homework (URL only)',
      type: 'url',
    }),
    defineField({
      name: 'tenth',
      title: '10th Grade Summer Homework (URL only)',
      type: 'url',
    }),
    defineField({
      name: 'eleventh',
      title: '11th Grade Summer Homework (URL only)',
      type: 'url',
    }),
    defineField({
      name: 'twelfth',
      title: '12th Grade Summer Homework (URL only)',
      type: 'url',
    }),
  ],
  //restricts the user's actions on Sanity document; Singleton page
  __experimental_actions: ['update', 'publish'],
});
