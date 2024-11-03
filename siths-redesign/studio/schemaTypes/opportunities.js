import { defineField, defineType } from 'sanity';

export const opportunities = defineType({
  name: 'opportunities',
  title: 'Opportunities',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'opptype',
      title: 'Opportunity Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internships', value: 'Internships'},
          {title: 'Scholarships', value: 'Scholarships'},
          {title: 'Volunteer', value: 'Volunteer'},
          {title: 'Career & Technical Education', value: 'Career & Technical Education'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
            {
                type: 'block',
                // Only allow these block styles
                styles: [
                    { title: 'Normal', value: 'normal'},
                    { title: 'H1', value: 'h1'},
                    { title: 'H2', value: 'h2'}
                ],
                // Only allow numbered lists
                lists: [
                    { title: 'Numbered', value: 'number'}
                ],
                marks: {
                    // Only allow these decorators
                    decorators: [
                        { title: 'Strong', value: 'strong'},
                        { title: 'Emphasis', value: 'em'}
                    ]
                }
            }
        ]
    }),
    defineField({
      name: 'link',
      title: 'Link to resource',
      type: 'string',
    }),
  ],
});
