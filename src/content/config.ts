import { defineCollection, z } from 'astro:content';

const imageBlockSchema = z.discriminatedUnion('_template', [
  z.object({
    _template: z.literal('fullWidth'),
    src: z.string().optional().default(''),
    alt: z.string().optional().default(''),
  }),
  z.object({
    _template: z.literal('fullWidthVideo'),
    src: z.string(),
  }),
  z.object({
    _template: z.literal('pair'),
    leftSrc: z.string().optional().default(''),
    leftAlt: z.string().optional().default(''),
    leftVideoSrc: z.string().optional(),
    rightSrc: z.string().optional().default(''),
    rightAlt: z.string().optional().default(''),
    rightVideoSrc: z.string().optional(),
  }),
]);

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    client: z.string(),
    order: z.number().optional().default(99),
    cardImage: z.string().optional().default(''),
    cardImageOverlay: z.string().optional(),
    cardDescription: z.string().optional().default(''),
    stickyDescription: z.string().optional(),
    imageBlocks: z.array(imageBlockSchema).optional().default([]),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    heroVideo: z.string().optional(),
    heroVideoMobile: z.string().optional(),
    heroImage: z.string().optional(),
    favicon: z.string().optional(),
    bio: z.string(),
    projectDescription: z.string().optional(),
    location: z.string(),
    timezone: z.string(),
    copyright: z.string(),
  }),
});

export const collections = { projects, settings };
