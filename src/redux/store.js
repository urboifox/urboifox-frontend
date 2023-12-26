import { configureStore } from "@reduxjs/toolkit";
import navMenuSlice from "./slices/navMenuSlice";
import websiteDataSlice from "./slices/websiteDataSlice";
import navbarSlice from "./slices/navbarSlice";
import loadingSlice from "./slices/loadingSlice";
import aboutSlice from "./slices/aboutSlice";
import pendingUpdatesSlice from "./slices/pendingUpdatesSlice";

const store = configureStore({
  reducer: {
    navMenu: navMenuSlice.reducer,
    websiteData: websiteDataSlice.reducer,
    navbar: navbarSlice.reducer,
    load: loadingSlice.reducer,
    about: aboutSlice.reducer,
    pendingUpdates: pendingUpdatesSlice.reducer,
  },
});

export default store;
