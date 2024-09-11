import { z } from 'zod';

export const advertisementSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  createdAt: z.string(),
  views: z.number(),
  likes: z.number(),
  imageUrl: z.string(),
});

export const advertisementListSchema = z.array(advertisementSchema);
export type AdvertisementModel = z.infer<typeof advertisementSchema>;

export type AdvertisementListModel = z.infer<typeof advertisementListSchema>;
