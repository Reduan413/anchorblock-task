import { configureStore } from '@reduxjs/toolkit';
import { api } from './features/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';


const store = configureStore({
  reducer: {
    // other reducers...
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

