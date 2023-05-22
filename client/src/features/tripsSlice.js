// tripsSlice.js

import { createSlice } from '@reduxjs/toolkit';



const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    page: 0,
    inputValue: '',
  },
  reducers: {
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

export const { incrementPage, increment5Pages, returnPage, setInputValue } = tripsSlice.actions;


export default tripsSlice.reducer;
