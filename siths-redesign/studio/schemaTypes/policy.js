import {defineField, defineType} from 'sanity'

export const policys = defineType({
  name: 'policys',
  title: 'Policys',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    // defineField({
    //   name: '',
    //   title: '',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'note',
    //   title: 'Note',
    //   type: 'string',
    // }),
    // defineField({
    //     name: 'description',
    //     title: 'Description',
    //     type: 'array',
    //     of: [
    //         {
    //             type: 'block',
    //             // Only allow these block styles
    //             styles: [
    //                 { title: 'Normal', value: 'normal'},
    //                 { title: 'H1', value: 'h1'},
    //                 { title: 'H2', value: 'h2'}
    //             ],
    //             // Only allow numbered lists
    //             lists: [
    //                 { title: 'Numbered', value: 'number'}
    //             ],
    //             marks: {
    //                 // Only allow these decorators
    //                 decorators: [
    //                     { title: 'Strong', value: 'strong'},
    //                     { title: 'Emphasis', value: 'em'}
    //                 ]
    //             }
    //         }
    //     ]
    // }),
  ],
})
