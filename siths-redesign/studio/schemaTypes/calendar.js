import {defineField, defineType} from 'sanity'

export const calendar = defineType({
  name: 'calendar',
  title: 'Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'event',
      title: 'Event',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description (HTML)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Dates',
      type: 'object',
      fields: [
        defineField({
          name: 'start',
          title: 'Start timestamp',
          type: 'datetime',
        }),
        defineField({
          name: 'end',
          title: 'End timestamp',
          type: 'datetime',
        }),
        defineField({
          name: 'allDay',
          title: 'All day?',
          type: 'boolean',
          initialValue: false,
        }),
      ],
      //make the fields render next to each other
      options: {columns: 2},
    }),
    defineField({
      name: 'graphId',
      title: `microsoft graph id (don't touch)`,
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'graphChangeKey',
      title: `microsoft graph change key (don't touch)`,
      type: 'string',
      hidden: true,
    }),
  ],
})
