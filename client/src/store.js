import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "./features/tripsSlice";
import { tripsApi } from './features/apiSlice';
import stationsReducer from "./features/stationsSlice";

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
    [tripsApi.reducerPath]: tripsApi.reducer,
    stations: stationsReducer, // Include stationsReducer
    stationsApi: tripsApi.reducer, // Use a unique key for stationsApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tripsApi.middleware),
});
