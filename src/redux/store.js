import { configureStore } from "@reduxjs/toolkit";
import navMenuSlice from "./slices/navMenuSlice";
import websiteDataSlice from "./slices/websiteDataSlice";
import navbarSlice from "./slices/navbarSlice";
import loadingSlice from "./slices/loadingSlice";
import aboutSlice from "./slices/aboutSlice";

const store = configureStore({
  reducer: {
    navMenu: navMenuSlice.reducer,
    websiteData: websiteDataSlice.reducer,
    navbar: navbarSlice.reducer,
    load: loadingSlice.reducer,
    about: aboutSlice.reducer,
  },
});

export default store;
