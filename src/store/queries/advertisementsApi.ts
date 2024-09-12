import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  type AdvertisementListModel,
  advertisementListSchema,
  type AdvertisementModel,
  advertisementSchema,
} from '../../models/advertismentSchema';
import { z } from 'zod';

export interface SearchParams {
  name: string;
  _sort: string;
  _order: 'asc' | 'desc';
  _page: number;
  _per_page: number;
}

export const advertisementsApi = createApi({
  reducerPath: 'advertisementsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: builder => ({
    getAdvertisements: builder.query<AdvertisementListModel, SearchParams>({
      query: ({ name, _sort, _order, _page, _per_page }) => ({
        url: '/advertisements',
        params: {
          name,
          _sort,
          _order,
          _page,
          _per_page,
        },
      }),
      transformResponse: (response: AdvertisementListModel) => {
        try {
          return advertisementListSchema.parse(response);
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
    getAdvertisementById: builder.query({
      query: id => `advertisements/${id}`,
      transformResponse: (response: AdvertisementModel) => {
        try {
          const advertisement = advertisementSchema.parse(response);
          return advertisement;
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
        method: 'PATCH',
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
} = advertisementsApi;
