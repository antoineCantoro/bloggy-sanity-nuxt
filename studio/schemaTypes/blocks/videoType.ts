import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    defineField({
      name: 'youtube_id',
      type: 'string',
      title: 'YouTube ID',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'display_title',
      title: 'Display title?',
      type: 'boolean',
      options: {layout: 'checkbox'},
    }),
    defineField({
      name: 'legend',
      type: 'string',
      title: 'Legend',
    }),
  ],
})