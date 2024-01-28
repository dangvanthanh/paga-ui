import { z } from 'astro:content'

export const componentSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})

export const overviewSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})
