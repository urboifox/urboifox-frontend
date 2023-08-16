import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice;
