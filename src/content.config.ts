import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Project-specific fields (optional)
        role: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        githubUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        duration: z.string().optional(),
        teamSize: z.number().optional(),
        // ADR-specific fields (optional)
        status: z.enum(['proposed', 'accepted', 'deprecated', 'superseded']).optional(),
        decisionDate: z.date().optional(),
        consequences: z.array(z.string()).optional(),
        // SEO fields
        image: z.string().optional(),
        canonicalUrl: z.string().url().optional(),
      }),
    }),
  }),
};
