import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { advertisementsApi } from './queries/advertisementsApi';

export const store = configureStore({
  reducer: {
    [advertisementsApi.reducerPath]: advertisementsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(advertisementsApi.middleware),
});

// Настраиваем слушатели для автоматического refetch
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
