import { defineCollection, z } from 'astro:content';

const feed = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()).default([]),
    title: z.string().optional(),
    time: z.string(),
  }),
});

export const collections = { feed };
