import { defineField, defineType } from 'sanity';

export const news = defineType({
    name: 'alumOpportunities',
    title: "Alumni Opportunities",
    type: 'document',
    fields: [
        defineField({
            name: 'post-title',
            title: 'Post Title',
            type: 'url',
        }),
        
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            }
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
        }),
    ]
});
