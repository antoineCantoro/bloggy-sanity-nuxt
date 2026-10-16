import {defineField, defineType} from 'sanity'

export const textContentType = defineType({
  name: 'textContent',
  type: 'object',
  title: 'Text',
  fields: [
    defineField({
      name: 'textContent',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})