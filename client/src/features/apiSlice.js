// apiSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tripsApi = createApi({
  reducerPath: 'tripsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getAllTrips: builder.query({
      query: ({ page = 0 }) => ({
        url: `api/trips?page=${page}`,
      }),
    }),
    searchBikeRents: builder.query({
      query: ({ searchTerm }) => ({
        url: `api/trips/search?searchTerm=${searchTerm}`,
        method: 'GET',
        params: { searchTerm },
      })
    }),
  }),
});

export const { useGetAllTripsQuery, useSearchBikeRentsQuery } = tripsApi;
