import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    category: z.enum([
      'Enterprise AI Systems',
      'Conversational AI',
      'Knowledge Engineering',
      'Automation Systems',
      'Browser Automation',
      'AI Operations',
    ]),
    role: z.string(),
    organization: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    status: z.enum(['ongoing', 'completed']),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          description: z.string().optional(),
        }),
      )
      .default([]),
    confidentiality: z.enum(['public', 'generalized']).default('generalized'),
    published: z.coerce.date(),
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, writing };
