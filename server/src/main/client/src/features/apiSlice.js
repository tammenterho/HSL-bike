import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tripsApi = createApi({
  reducerPath: 'tripsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hsl-bike-production.up.railway.app/' }),
  endpoints: (builder) => ({

    getAllTrips: builder.query({
      query: ({ page = 0 }) => ({
        url: `api/trips?page=${page}`,
      }),
    }),
    searchBikeRents: builder.query({
      query: ({ searchTerm, page = 0 }) => ({
        url: `api/trips/search?searchTerm=${searchTerm}&page=${page}`,
        method: 'GET',
      })
    }),
    getAllStations: builder.query({
      query: ({ page = 0 }) => ({
        url: `api/stations?page=${page}`,
      }),
    }),
    countTripsByDepartureStation: builder.query({
      query: ({ stationName }) => ({
        url: `api/trips/countfrom?stationName=${stationName}`,
        method: 'GET',
      })
    }),
    countTripsByReturnStation: builder.query({
      query: ({ stationName }) => ({
        url: `api/trips/countto?stationName=${stationName}`,
        method: 'GET',
      })
    }),
  }),
});

export const { 
  useGetAllTripsQuery, 
  useSearchBikeRentsQuery, 
  useGetAllStationsQuery, 
  useCountTripsByDepartureStationQuery,
  useCountTripsByReturnStationQuery  
} = tripsApi;
