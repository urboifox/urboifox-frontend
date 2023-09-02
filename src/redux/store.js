import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import navMenuSlice from "./slices/navMenuSlice";
import websiteDataSlice from "./slices/websiteDataSlice";
import screenSlice from "./slices/screenSlice";
import navbarSlice from "./slices/navbarSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    navMenu: navMenuSlice.reducer,
    websiteData: websiteDataSlice.reducer,
    navbar: navbarSlice.reducer,
    screen: screenSlice.reducer,
  },
});

export default store;
