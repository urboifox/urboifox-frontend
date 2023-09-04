import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedItem } = aboutSlice.actions;
export default aboutSlice;
