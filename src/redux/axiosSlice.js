import { createSlice } from "@reduxjs/toolkit";

export const axiosSlice = createSlice({
  name: 'axios',
  initialState: {
    error: ''
  },
  reducers: {
    error: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { error } = axiosSlice.actions;

export default axiosSlice.reducer;
