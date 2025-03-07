import { defineField, defineType } from 'sanity';

export const athletics = defineType({
    name: 'athletics',
    title: "Athletics",
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Heading',
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
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                    ],
                    // Only allow numbered lists
                    lists: [
                        { title: 'Numbered', value: 'number' }
                    ],
                    marks: {
                        // Only allow these decorators
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                        ]
                    }
                }
            ]
        }),
        defineField({
            name: 'athletics',
            title: 'Athletics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'sport',
                            title: 'Sport',
                            type: 'number',
                        }),
                        defineField({
                            name: 'season',
                            title: 'Season',
                            type: 'string',
                        }),
                        defineField({
                            name: 'coach',
                            title: 'Coach',
                            type: 'string',
                        }),
                        defineField({
                            name: 'opptype',
                            title: 'Opportunity Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'girls', value: 'girls' },
                                    { title: 'boys', value: 'boys' },
                                    { title: 'tryout', value: 'tryout' },
                                    { title: 'starts before school', value: 'starts before school' }
                                ], // <-- predefined values
                                layout: 'checkbox' // <-- defaults to 'dropdown'
                            }
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
