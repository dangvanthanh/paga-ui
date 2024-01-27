import { z } from 'astro:content'

export const componentSchema = z.object({
  title: z.string(),
  description: z.string(),
})

export const overviewSchema = z.object({
  title: z.string(),
  description: z.string(),
})
