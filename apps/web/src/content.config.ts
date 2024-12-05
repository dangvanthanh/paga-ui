import { defineCollection } from 'astro:content'
import { z } from 'astro:content'
import { glob } from 'astro/loaders'

const schema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	status: z.optional(z.string()),
})

const components = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/components' }),
	schema,
})

const overview = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/overview' }),
	schema,
})

export const collections = {
	components,
	overview,
}
