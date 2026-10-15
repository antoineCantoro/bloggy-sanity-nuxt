import {eventType} from './eventType'
import {postType} from './postType'
import {artistType} from './artistType'
import {articleType} from './articleType'


// Blocks (page builder)
import {blockTypes} from './blocks'


export const schemaTypes: SchemaTypeDefinition[] = [
  eventType, postType, artistType, articleType,
  ...blockTypes,
]