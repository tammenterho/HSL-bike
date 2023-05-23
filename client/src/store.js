import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./features/tripsSlice";
import { tripsApi } from './features/apiSlice';
import stationsReducer from "./features/tripsSlice";

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
    [tripsApi.reducerPath]: tripsApi.reducer,
  },
    stations: stationsReducer,
    [tripsApi.reducerPath]: tripsApi.reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tripsApi.middleware),
});
