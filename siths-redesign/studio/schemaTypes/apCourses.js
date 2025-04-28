import {defineField, defineType} from 'sanity'

export const apCourses = defineType({
  name: 'apCourses',
  title: 'AP',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'name',
    //   title: 'Heading',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'block',
    //       styles: [
    //         {title: 'Normal', value: 'normal'},
    //         {title: 'H1', value: 'h1'},
    //         {title: 'H2', value: 'h2'},
    //         {title: 'H3', value: 'h3'},
    //       ],
    //       lists: [{title: 'Numbered', value: 'number'}],
    //       marks: {
    //         decorators: [{title: 'Strong', value: 'strong'}],
    //       },
    //     },
    //   ],
    // }),
    // defineField({
    //   name: 'contacts',
    //   title: 'Contacts',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         defineField({
    //           name: 'sport',
    //           title: 'Sport',
    //           type: 'string',
    //           description: 'ie: Badminton - Girls Varsity',
    //         }),
    //         defineField({
    //           name: 'season',
    //           title: 'Season',
    //           type: 'string',
    //           options: {
    //             list: [
    //               {title: 'Fall', value: 'Fall'},
    //               {title: 'Winter', value: 'Winter'},
    //               {title: 'Spring', value: 'Spring'},
    //             ],
    //             layout: 'dropdown',
    //           },
    //         }),
    //         defineField({
    //           name: 'coach',
    //           title: 'Coach',
    //           type: 'string',
    //         }),
    //         defineField({
    //           name: 'email',
    //           title: 'Email',
    //           type: 'string',
    //         }),
    //         defineField({
    //           name: 'type',
    //           title: 'Type',
    //           type: 'array',
    //           of: [{type: 'string'}],
    //           options: {
    //             list: [
    //               {title: 'Tryout Required', value: 'tryout required'},
    //               {title: 'Pre-season before school', value: 'preseason'},
    //             ],
    //             layout: 'checkbox',
    //           },
    //         }),
    //       ],
    //     },
    //   ],
    //   options: {
    //     layout: 'table',
    //   },
    // }),
  ],
})
