import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  createdAt: z.string(),
  views: z.number(),
  likes: z.number(),
  imageUrl: z.string(),
  count: z.number(),
});

export type ProductModel = z.infer<typeof productSchema>;
