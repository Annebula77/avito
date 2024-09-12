import { z } from 'zod';
import { productSchema } from './productSchema';

export const orderSchema = z.object({
  id: z.string(),
  status: z.number(),
  createdAt: z.string(),
  finishedAt: z.string(),
  total: z.number().positive(),
  deliveryWay: z.string(),
  items: z.array(productSchema),
});

export const orderListSchema = z.array(orderSchema);
export const paginationSchema = z.object({
  first: z.number(),
  prev: z.number().nullable(),
  next: z.number().nullable(),
  last: z.number(),
  pages: z.number(),
  data: z.array(orderSchema),
});
export type OrderModel = z.infer<typeof orderSchema>;
export type OrderListModel = z.infer<typeof orderListSchema>;
export type PaginationModel = z.infer<typeof paginationSchema>;
