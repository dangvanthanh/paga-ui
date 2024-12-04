import { glob } from 'astro/loaders'
import { componentSchema, overviewSchema } from './_schemas'
import { defineCollection } from 'astro:content'

// const componentsCollection = defineCollection({
// 	type: 'content',
// 	schema: componentSchema,
// })
//
// const overviewCollection = defineCollection({
// 	type: 'content',
// 	schema: overviewSchema,
// })

const components = defineCollection({
	loader: glob({ pattern: '*.mdx', base: './components' }),
	schema: componentSchema,
})

const overview = defineCollection({
	loader: glob({ pattern: '*.mdx', base: './overview' }),
	schema: overviewSchema,
})

export const collections = {
	components,
	overview,
}