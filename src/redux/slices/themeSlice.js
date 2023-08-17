import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkTheme: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("darkTheme", state.darkTheme);
    },
    setTheme: (state, action) => {
      state.darkTheme = action.payload;
      localStorage.setItem("darkTheme", state.darkTheme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice;
