import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;
