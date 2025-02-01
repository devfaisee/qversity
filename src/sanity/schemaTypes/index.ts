import { type SchemaTypeDefinition } from 'sanity'
import product from "./product"; // Import product schema

export const schemaTypes = [product]; // Register it
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
}
