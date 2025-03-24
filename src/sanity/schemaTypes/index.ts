import { type SchemaTypeDefinition } from 'sanity'
import blogSchema from '../schemas/blog-schema'
import projectSchema from '../schemas/project-schema'
import rprojectSchema from '../schemas/rproject-schema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema,projectSchema,rprojectSchema],
}
