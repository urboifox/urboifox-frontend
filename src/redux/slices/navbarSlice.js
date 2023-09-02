import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: true,
  prevScrollPos: 0,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbarVisible: (state, action) => {
      state.visible = action.payload;
    },
    setPrevScrollPos: (state, action) => {
      state.prevScrollPos = action.payload;
    },
  },
});

export const { setNavbarVisible, setPrevScrollPos } = navbarSlice.actions;
export default navbarSlice;
