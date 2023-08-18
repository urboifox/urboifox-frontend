import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import navMenuSlice from "./slices/navMenuSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    navMenu: navMenuSlice.reducer,
  },
});

export default store;
