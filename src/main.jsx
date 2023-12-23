import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RouterProvider } from "react-router";
import myRouter from "./routes.jsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import { SkeletonTheme } from "react-loading-skeleton";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactLenis root options={{ duration: 2 }}>
        <SkeletonTheme baseColor="#141414" highlightColor="#444">
          <RouterProvider router={myRouter} />
        </SkeletonTheme>
      </ReactLenis>
    </Provider>
    <Analytics
      debug={false}
      mode="production"
      beforeSend={(event) => {
        if (event.url.includes("/admin")) {
          return null;
        }
        return event;
      }}
    />
  </React.StrictMode>
);
