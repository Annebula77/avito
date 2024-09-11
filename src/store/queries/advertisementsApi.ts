import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  advertisementListSchema,
  type AdvertisementListModel,
  type AdvertisementModel,
  advertisementSchema,
} from '../../models/advertismentSchema';
import { z } from 'zod';

export const advertisementsApi = createApi({
  reducerPath: 'advertisementsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: builder => ({
    getAdvertisements: builder.query({
      query: ({ page = 1, per_page = 10, search = '', filter = {} }) => {
        const queryParams = new URLSearchParams({
          _start: ((page - 1) * per_page).toString(),
          _limit: per_page.toString(),
          q: search,
          ...filter,
        });
        return `advertisements?${queryParams.toString()}`;
      },
      transformResponse: (response: AdvertisementListModel) => {
        try {
          const advertisements = advertisementListSchema.parse(response);
          return advertisements;
        } catch (error) {
          if (error instanceof z.ZodError) {
            console.error('Zod validation error:', error.errors);
          } else {
            console.error('Unexpected error:', error);
          }
          throw error;
        }
      },
    }),
    getAdvertisementsCount: builder.query({
      query: () => 'advertisements',
      transformResponse: (response: AdvertisementModel[]) => response.length,
    }),
    getAdvertisementById: builder.query({
      query: id => `advertisements/${id}`,
      transformResponse: (response: AdvertisementModel) =>
        advertisementSchema.parse(response),
    }),
    createAdvertisement: builder.mutation({
      query: newAd => ({
        url: 'advertisements',
        method: 'POST',
        body: newAd,
      }),
    }),
    updateAdvertisement: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `advertisements/${id}`,
        method: 'PUT',
        body: update,
      }),
    }),
    deleteAdvertisement: builder.mutation({
      query: id => ({
        url: `advertisements/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAdvertisementsQuery,
  useGetAdvertisementByIdQuery,
  useCreateAdvertisementMutation,
  useUpdateAdvertisementMutation,
  useDeleteAdvertisementMutation,
  useGetAdvertisementsCountQuery,
} = advertisementsApi;
