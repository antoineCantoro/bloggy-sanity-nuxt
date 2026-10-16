
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import type {StructureResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonPages = [
  {id: 'homePage', title: 'Home Page'},
  {id: 'aboutPage', title: 'About Page'},
  {id: 'blogIndexPage', title: 'Blog Index Page'},
  {id: 'contactPage', title: 'Contact Page'},
  {id: 'siteSettings', title: 'Site Settings'},
] as const

const singletonTypes = new Set(singletonPages.map(({id}) => id))

const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...singletonPages.map(({id, title}) =>
        S.listItem()
          .id(id)
          .title(title)
          .child(
            S.document()
              .schemaType(id)
              .documentId(id)
              .title(title),
          ),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? '')),
    ])

export default defineConfig({
  name: 'default',
  title: 'Bloggy',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [structureTool({structure}), visionTool()],

  schema: {
      types: schemaTypes,
      templates: (prev) =>
        prev.filter((t) => !singletonTypes.has(t.schemaType ?? t.id)),
    },

  document: {
    actions: (input, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return input.filter(
          ({action}) => action && singletonActions.has(action),
        )
      }
      return input
    },
    newDocumentOptions: (prev) =>
      prev.filter((item) => !singletonTypes.has(item.templateId)),
  },
})
