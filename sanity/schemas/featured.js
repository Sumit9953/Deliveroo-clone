export default {
  name: 'featured',
  type: 'document',
  title: 'Featured Menu categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'resturants',
      type: 'array',
      title: 'Resturant',
      of: [{type: 'reference', to: [{type: 'resturant'}]}],
    },
  ],
}
