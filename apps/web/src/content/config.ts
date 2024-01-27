import { componentSchema, overviewSchema } from './_schemas'
import { defineCollection, z } from 'astro:content'

const componentsCollection = defineCollection({
  type: 'content',
  schema: componentSchema,
})

const overviewCollection = defineCollection({
  type: 'content',
  schema: overviewSchema,
})

export const collections = {
  components: componentsCollection,
  overview: overviewCollection,
}
