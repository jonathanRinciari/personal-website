import { z, defineCollection } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    featured: z.boolean(),
    order: z.number(),
    tags: z.array(z.string()),
    metrics: z.array(z.string()),
    seoTitle: z.string(),
    seoDescription: z.string(),
    ogImage: z.string().optional(),
    confidentiality: z.enum(['public', 'generalized']),
    status: z.enum(['published', 'draft']),
  }),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()),
    seoTitle: z.string(),
    seoDescription: z.string(),
    ogImage: z.string().optional(),
    status: z.enum(['published', 'draft']),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  work: workCollection,
  writing: writingCollection,
};
