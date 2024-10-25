import { defineField, defineType } from 'sanity';

export const erlenwein = defineType({
    name: 'erlenwein',
    title: "Erlenwein Announcements",
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        })
    ]
});
