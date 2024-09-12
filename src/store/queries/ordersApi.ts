import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type PaginationModel } from '../../models/ordersSchema';

export interface SearchParams {
  status: number[];
  _page: number;
  _per_page: number;
  _sort?: string;
  _order?: 'asc' | 'desc';
}

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: builder => ({
    getOrders: builder.query<PaginationModel, SearchParams>({
      query: ({
        status,
        _page,
        _per_page,
        _sort = 'total',
        _order = 'asc',
      }) => {
        const params = new URLSearchParams();
        status.forEach(st => {
          params.append('status', st.toString());
        });
        params.set('_page', _page.toString());
        params.set('_per_page', _per_page.toString());
        params.set('_sort', _sort);
        params.set('_order', _order);

        return {
          url: '/orders',
          params,
        };
      },
    }),
    patchOrder: builder.mutation<void, { id: string; finishedAt: string }>({
      query: ({ id, finishedAt }) => ({
        url: `/orders/${id}`,
        method: 'PATCH',
        body: { finishedAt },
      }),
    }),
  }),
});

export const { useGetOrdersQuery, usePatchOrderMutation } = ordersApi;
