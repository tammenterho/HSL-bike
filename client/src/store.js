import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tripsApi } from "./features/apiSlice";


export const store = configureStore({
  reducer: {
    [tripsApi.reducerPath]: tripsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(tripsApi.middleware),
});