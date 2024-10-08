import { defineField, defineType } from 'sanity';

export const staff = defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Staff Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name:'description',
      title:"Description (only for Erlenwein/Terrusa profiles)",
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image (PNG or JPG only, please)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Teachers', value: 'teachers' },
          { title: 'Administrators', value: 'administrators' },
          { title: 'Other Employees', value: 'otherEmployees' },
        ],
        layout: 'dropdown',
      },
    }),
  ],
});
