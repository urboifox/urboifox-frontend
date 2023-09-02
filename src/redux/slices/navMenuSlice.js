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
    setNavMenu: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { toggleNavMenu, setNavMenu } = navMenuSlice.actions;
export default navMenuSlice;
