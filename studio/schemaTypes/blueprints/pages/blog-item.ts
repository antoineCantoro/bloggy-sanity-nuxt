import {defineType, defineField, defineArrayMember} from 'sanity'
// import {HomeIcon} from '@sanity/icons'

export const blogItemPageType = defineType({
  name: 'blogItemPage',
  title: 'Blog Item Page',
  type: 'document',
  // icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'object',
      title: 'Excerpt',
      fields: [
        defineField({
          name: 'excerpt',
          type: 'array',
          title: 'Excerpt',
          of: [
            {
              type: 'block',
              styles: [],
              lists: [],
              marks: {
                decorators: [],
                annotations: []
              },
            }
          ],
          // validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'Hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'Quote',
          type: 'quote',
        }),
        defineArrayMember({
          name: 'Gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'Video',
          type: 'video',
        }),
        defineArrayMember({
          name: 'Text',
          type: 'textContent',
        }),
      ],
    }),
    // defineField({
    //   name: 'pageBuilder',
    //   title: 'Page Builder',
    //   type: 'pageBuilder',
    // }),
    // defineField({
    //   name: 'seo',
    //   title: 'SEO',
    //   type: 'seo',
    //   options: {collapsible: true, collapsed: true},
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})