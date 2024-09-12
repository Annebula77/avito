import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { advertisementsApi } from './queries/advertisementsApi';
import { ordersApi } from './queries/ordersApi';

export const store = configureStore({
  reducer: {
    [advertisementsApi.reducerPath]: advertisementsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      advertisementsApi.middleware,
      ordersApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
