// stationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const stationsSlice = createSlice({
  name: 'stations',
  initialState: {
    data: [],
    page: 0,
    inputValue: '', // Include inputValue in the initial state
  },
  reducers: {
    setStations(state, action) {
        state.data = action.payload;
      },
    incrementPage(state) {
      state.page += 1;
    },
    increment5Pages(state) {
      state.page += 5;
    },
    returnPage(state) {
      state.page = 0;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    }
  },
});

export const { incrementPage, increment5Pages, returnPage, setInputValue, setStations } = stationsSlice.actions;

export default stationsSlice.reducer;
