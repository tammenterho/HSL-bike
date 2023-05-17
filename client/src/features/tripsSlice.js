// tripsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    page: 0,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
  },
});

export const { incrementPage } = tripsSlice.actions;

export default tripsSlice.reducer;
