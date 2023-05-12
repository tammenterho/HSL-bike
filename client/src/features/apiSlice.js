import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const tripsApi = createApi({
    reducerPath:"tripsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/"}),
    endpoints: (builder) => ({
        getAllTrips: builder.query({
            query: () => "api/trips",
        }),
    }),
});

export const {
    useGetAllTripsQuery
} = tripsApi