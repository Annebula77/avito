import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  createdAt: z.string(),
  views: z.number().optional(),
  likes: z.number().optional(),
  imageUrl: z.string().optional(),
  count: z.number(),
});

export type ProductModel = z.infer<typeof productSchema>;
