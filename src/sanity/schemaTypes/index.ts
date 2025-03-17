import { type SchemaTypeDefinition } from 'sanity'
import blogSchema from '../schemas/blog-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema],
}
