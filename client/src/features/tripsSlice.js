import { createSlice } from "@reduxjs/toolkit";

export const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    data: [],
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    fetchTripsStart: (state) => {
      state.loading = true;
    },
    fetchTripsSuccess: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
      state.page++;
    },
    fetchTripsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTripsStart, fetchTripsSuccess, fetchTripsFailure } = tripsSlice.actions;

export default tripsSlice.reducer;
