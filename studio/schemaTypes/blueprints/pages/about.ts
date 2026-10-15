import {defineType, defineField} from 'sanity'
// import {HomeIcon} from '@sanity/icons'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
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
        title: 'About Page',
        // media: HomeIcon,
      }
    },
  },
})