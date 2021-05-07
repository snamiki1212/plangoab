import React from "react";

// components
import { MuiPickersUtilsProvider } from "../providers/MuiPickersUtilsProvider";
import { ErrorBoundary } from "../ErrorBoundary";
import { ReactReduxProvider } from "../providers/ReactReduxProvider";

// fullcalendar styles
import "@fullcalendar/common/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";

// fundamental styles
import "../styles/reset.css";
import "../styles/core.css";

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ReactReduxProvider>
        <MuiPickersUtilsProvider>
          <Component {...pageProps} />
        </MuiPickersUtilsProvider>
      </ReactReduxProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
