import {defineType, defineField} from 'sanity'

export const robotsType = defineType({
  name: 'robots',
  title: 'Robots',
  type: 'object',
  fields: [
    defineField({
      name: 'seoIndexingGroup',
      title: 'SEO Indexing',
      type: 'object',
      fields: [
        defineField({
          name: 'seoIndexing',
          title: 'SEO Indexing',
          type: 'string',
          description: `Select the SEO indexing mode for this page`,
          options: {
            list: [
              {title: 'noindex, nofollow', value: 'noindex, nofollow'},
              {title: 'index, follow', value: 'index, follow'},
              {title: 'noindex, follow', value: 'noindex, follow'},
              {title: 'index, nofollow', value: 'index, nofollow'},
            ],
          },
        }),
      ],
    }),
  ],
})