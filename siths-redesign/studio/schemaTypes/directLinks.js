import {defineField, defineType} from 'sanity'

export const directLinks = defineType({
  name: 'directLinks',
  title: 'Direct Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      description: 'Instructions for content managers only',
      type: 'array',
      of: [
        defineType({
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'main',
      title: 'Main',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'schoolInformation',
      title: 'School Information',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'student',
      title: 'Student',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'clubsActivities',
      title: 'Clubs and Activities',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'parent',
      title: 'Parent',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'alumni',
      title: 'Alumni',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'staff',
      title: 'Staff',
      type: 'array',
      of: [
        defineType({
          name: 'linkComponent',
          title: 'Link Component',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})
