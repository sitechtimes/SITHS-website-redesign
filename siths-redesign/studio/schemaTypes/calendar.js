import { defineField, defineType } from 'sanity';

export const calendar = defineType({
  name: 'calendar',
  title: 'Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'time',
      title: 'Time (optional)',
      type: 'object',
      fields: [
        defineField({
          name: 'start',
          type: 'timeValue',
        }),
        defineField({
          name: 'end',
          type: 'timeValue',
        }),
      ],
      //make the fields render next to each other
      options: {columns: 2},
    }),
    defineField({
      name: 'event',
      title: 'Event',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image (PNG or JPG only, please)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
