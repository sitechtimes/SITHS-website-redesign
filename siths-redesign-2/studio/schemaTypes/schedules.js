import { defineField, defineType } from 'sanity';

export const schedules = defineType({
  name: 'schedules',
  title: 'Bell Schedules',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Schedule Name',
      type: 'string',
    }),
    defineField({
      name: 'periods',
      title: 'Periods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'periodNumber',
              title: 'Period Number',
              type: 'number', 
            }),
            defineField({
              name: 'startTime',
              title: 'Start Time',
              type: 'string',
            }),
            defineField({
              name: 'endTime',
              title: 'End Time',
              type: 'string',
            }),
            defineField({
              name: 'periodLength',
              title: 'Period Length',
              type: 'number',
            }),
          ],
        },
      ],
      options: {
        layout: 'table',
      },
    }),
  ],
});
