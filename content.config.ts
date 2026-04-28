import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createBaseSchema = () => z.object({
  title: z.string(),
  description: z.string()
})

const createSeoSchema = () => z.object({
  title: z.string(),
  description: z.string()
}).optional()

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional(),
  download: z.boolean().optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: createBaseSchema().extend({
        seo: createSeoSchema(),
        hero: z.object({
          eyebrow: z.string(),
          image: createImageSchema(),
          links: z.array(createButtonSchema()),
          highlights: z.array(z.string())
        }),
        about: createBaseSchema().extend({
          points: z.array(z.string())
        }),
        skills: createBaseSchema().extend({
          groups: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string().editor({ input: 'icon' }),
            items: z.array(z.string())
          }))
        }),
        experience: createBaseSchema().extend({
          items: z.array(z.object({
            role: z.string(),
            company: z.string(),
            date: z.string(),
            summary: z.string(),
            points: z.array(z.string()),
            icon: z.string().editor({ input: 'icon' })
          }))
        }),
        projects: createBaseSchema(),
        contact: createBaseSchema().extend({
          note: z.string()
        })
      })
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        status: z.string().nonempty(),
        role: z.string().nonempty(),
        icon: z.string().editor({ input: 'icon' }),
        image: createImageSchema(),
        url: z.string().optional(),
        tags: z.array(z.string()),
        highlights: z.array(z.string()),
        date: z.string()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'projects.yml' }
      ],
      schema: createBaseSchema().extend({
        seo: createSeoSchema(),
        links: z.array(createButtonSchema())
      })
    }),
    about: defineCollection({
      type: 'page',
      source: 'about.yml',
      schema: createBaseSchema().extend({
        seo: createSeoSchema(),
        content: z.string(),
        images: z.array(createImageSchema())
      })
    })
  }
})
