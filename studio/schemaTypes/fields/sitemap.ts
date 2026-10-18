import {defineType, defineField} from 'sanity'

export const sitemapType = defineType({
  name: 'sitemap',
  title: 'Sitemap',
  type: 'object',
  fields: [
    defineField({
      name: 'excludeFromSitemap',
      title: 'Exclude from Sitemap',
      type: 'boolean',
      description: `Exclude this page from the sitemap`,
      initialValue: false,
    }),
    defineField({
      name: 'sitemapPriority',
      title: 'Sitemap Priority',
      type: 'number',
      description: `Set the priority of this page in the sitemap (0.0 - 1.0)`,
      validation: (rule) => rule.min(0).max(1).warning(`Should be between 0.0 and 1.0`),
    }),
  ],
})