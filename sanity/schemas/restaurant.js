import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),    
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',      
    }),
    defineField({
      name: 'long',
      title: 'longitude of the restaurant',
      type: 'number',      
    }),
    defineField({
      name: 'address',
      title: 'Address of the restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error('Please enter a value between 1 and 5'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish'}]}]
    }),
  ],  
})
