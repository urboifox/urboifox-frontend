import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: window.innerWidth,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    changeScreenWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { changeScreenWidth } = screenSlice.actions;
export default screenSlice;
