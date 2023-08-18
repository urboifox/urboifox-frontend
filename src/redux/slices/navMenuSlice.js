import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

const navMenuSlice = createSlice({
  name: "navMenu",
  initialState,
  reducers: {
    toggleNavMenu: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { toggleNavMenu } = navMenuSlice.actions;
export default navMenuSlice;
