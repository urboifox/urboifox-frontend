import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = aboutSlice.actions;
export default aboutSlice;
