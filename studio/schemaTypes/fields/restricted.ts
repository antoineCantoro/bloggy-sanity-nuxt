import {defineType, defineField} from 'sanity'

export const restrictedType = defineType({
  name: 'restricted',
  title: 'Restricted',
  type: 'object',
  fields: [
    defineField({
      name: 'enablePasswordRestricted',
      title: 'Enable Password Restriction',
      type: 'boolean',
      description: `Enable password restriction for this page`,
      initialValue: false,
    }),
    defineField({
      name: 'restrictedPassword',
      title: 'Restricted Password',
      type: 'string',
      // description: `Recommended max ${META_DESC_MAX} characters`,
      // validation: (rule) => rule.max(META_DESC_MAX).warning(`Should be under ${META_DESC_MAX} characters`),
    }),
  ],
})