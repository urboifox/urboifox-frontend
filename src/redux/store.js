import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import navMenuSlice from "./slices/navMenuSlice";
import websiteDataSlice from "./slices/websiteDataSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    navMenu: navMenuSlice.reducer,
    websiteData: websiteDataSlice.reducer,
  },
});

export default store;
