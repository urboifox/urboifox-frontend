import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: document.body.clientWidth,
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
