import type {SchemaTypeDefinition} from 'sanity'

// Site
import {siteTypes} from './blueprints/site'

// Blueprints (pages)
import {homePageType} from './blueprints/pages/home'
import {aboutPageType} from './blueprints/pages/about'
import {blogIndexPageType} from './blueprints/pages/blog-index'
import {blogItemPageType} from './blueprints/pages/blog-item'
import {contactPageType} from './blueprints/pages/contact'

const blueprintsTypes = [
  // pageType,
  homePageType,
  aboutPageType,
  blogIndexPageType,
  blogItemPageType,
  contactPageType,

  // blogPostType,
]

// Blocks (builder)
import {blockTypes} from './blocks'


export const schemaTypes: SchemaTypeDefinition[] = [
  ...blockTypes,
  ...siteTypes,
  ...blueprintsTypes,
]