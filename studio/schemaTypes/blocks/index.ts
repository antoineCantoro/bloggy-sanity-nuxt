import {defineType, defineArrayMember} from 'sanity'

import {imageBlockType} from './image-block'


export {
  imageBlockType,
}

/** All block types for schema registration */
export const blockTypes = [
  imageBlockType,
]