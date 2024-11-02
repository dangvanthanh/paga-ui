import { z } from 'astro:content'

const baseSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
})

export const componentSchema = baseSchema.extend({})

export const overviewSchema = baseSchema.extend({})
