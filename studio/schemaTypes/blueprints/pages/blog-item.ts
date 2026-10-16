import {defineType, defineField, defineArrayMember} from 'sanity'
// import {HomeIcon} from '@sanity/icons'

export const blogItemPageType = defineType({
  name: 'blogItemPage',
  title: 'Blog Item Page',
  type: 'document',
  // icon: HomeIcon,
  groups: [
    {name: 'information', title: 'Information', default: true},
    {name: 'builder', title: 'Builder'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'information',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'information',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      group: 'information',
      type: 'datetime',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      group: 'information',
      type: 'image',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'object',
      title: 'Excerpt',
      group: 'information',
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
    // Builder Tab
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      group: 'builder',
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
    // SEO Tab
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      // options: {collapsible: true, collapsed: false},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})