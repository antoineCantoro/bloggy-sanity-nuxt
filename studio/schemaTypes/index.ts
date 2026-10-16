import type {SchemaTypeDefinition} from 'sanity'

// import {eventType} from './eventType'
// import {postType} from './postType'
// import {artistType} from './artistType'
// import {articleType} from './articleType'


// Blueprints (pages)
import {homePageType} from './blueprints/pages/home'
import {aboutPageType} from './blueprints/pages/about'
import {blogIndexPageType} from './blueprints/pages/blog-index'
import {blogItemPageType} from './blueprints/pages/blog-item'
import {contactPageType} from './blueprints/pages/contact'
// import {pageType} from './blueprints/pages/page'
// import {siteSettingsType} from './blueprints/pages/site-settings'
// import {blogPostType} from './blueprints/pages/blog-post'

const blueprintsTypes = [
  // pageType,
  homePageType,
  aboutPageType,
  blogIndexPageType,
  blogItemPageType,
  contactPageType,
  // siteSettingsType,
  // blogPostType,
]

// Blocks (builder)
import {blockTypes} from './blocks'


export const schemaTypes: SchemaTypeDefinition[] = [
  ...blockTypes,
  ...blueprintsTypes,
]