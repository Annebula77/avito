import { z } from 'zod';

const nameRegex = /^[A-Za-zА-Яа-я0-9\s]+$/;
const descriptionRegex = /^[A-Za-zА-Яа-я0-9\s.,!?:"'()\-/_\\…–—]+$/;

// NOTE: temporary regex because of mock server
const imageUrlRegex =
  /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif))|^\/.*\.(?:png|jpg|jpeg|webp|gif)$/i;

export const advertisementSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, 'Наименование не может быть пустым')
    .refine(value => nameRegex.test(value), {
      message:
        'Наименование может содержать только буквы (латиница и кириллица), а также цифры',
    }),
  description: z
    .string()
    .min(1, 'Описание не может быть пустым')
    .refine(value => descriptionRegex.test(value), {
      message:
        'Описание может содержать только буквы, цифры и знаки препинания',
    }),
  price: z.number().positive('Цена должна быть положительным числом'),
  createdAt: z.string(),
  views: z.number(),
  likes: z.number(),
  imageUrl: z.string().refine(value => imageUrlRegex.test(value), {
    message:
      'Неверный формат URL изображения. Допустимы: png, jpg, jpeg, webp, gif, а также локальные пути.',
  }),
});

export const advertisementListSchema = z.object({
  first: z.number(),
  prev: z.number().nullable(),
  next: z.number().nullable(),
  last: z.number(),
  pages: z.number(),
  items: z.number(),
  data: z.array(advertisementSchema),
});

export type AdvertisementModel = z.infer<typeof advertisementSchema>;

export type AdvertisementListModel = z.infer<typeof advertisementListSchema>;
