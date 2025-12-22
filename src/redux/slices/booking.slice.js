import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOrder: [],
};
//
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    order: (prevState, { payload }) => {
      prevState.listOrder = [...prevState.listOrder];
    },
  },
});

export const { order } = bookingSlice.actions;

export default bookingSlice.reducer;
