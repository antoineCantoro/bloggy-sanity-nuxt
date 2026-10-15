import {defineType, defineField} from 'sanity'
// import {HomeIcon} from '@sanity/icons'

export const blogIndexPageType = defineType({
  name: 'blogIndexPage',
  title: 'Blog Index Page',
  type: 'document',
  // icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required(),
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
        title: 'Blog Index Page',
        // media: HomeIcon,
      }
    },
  },
})