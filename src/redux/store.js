import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import navMenuSlice from "./slices/navMenuSlice";
import websiteDataSlice from "./slices/websiteDataSlice";
import screenSlice from "./slices/screenSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    navMenu: navMenuSlice.reducer,
    websiteData: websiteDataSlice.reducer,
    screen: screenSlice.reducer,
  },
});

export default store;
