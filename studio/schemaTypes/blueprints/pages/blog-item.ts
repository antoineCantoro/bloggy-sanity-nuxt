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
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        // defineArrayMember({
        //   name: 'textWithIllustration',
        //   type: 'textWithIllustration',
        // }),
        // defineArrayMember({
        //   name: 'gallery',
        //   type: 'gallery',
        // }),
        // defineArrayMember({
        //   name: 'form',
        //   type: 'form',
        // }),
        // defineArrayMember({
        //   name: 'video',
        //   type: 'video',
        // }),
        // defineArrayMember({
        //   name: 'callToAction',
        //   type: 'reference',
        //   to: [{type: 'promotion'}],
        // }),
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
    prepare() {
      return {
        title: 'Blog Item Page',
        // media: HomeIcon,
      }
    },
  },
})