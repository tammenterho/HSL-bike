import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./features/tripsSlice.js"
import { tripsApi } from './features/apiSlice';

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
    [tripsApi.reducerPath]: tripsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tripsApi.middleware),
});
