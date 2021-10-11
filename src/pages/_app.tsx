import React from "react";
import { AppProps } from "next/app";

// components
import { MuiPickersUtilsProvider } from "~/src/providers/MuiPickersUtilsProvider";
import { ReactReduxProvider } from "~/src/providers/ReactReduxProvider";
import { ErrorBoundary } from "~/src/providers/ErrorBoundary";

// fullcalendar styles
import "@fullcalendar/common/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";

// styles
import "~/src/styles/reset.css";
import "~/src/styles/global.css";
import "~/src/styles/fullcalendar.custom.css";

// hooks
import { useHealthcheck } from "~/src/hooks/v2/useHealthcheck";

function MyApp({ Component, pageProps }: AppProps) {
  useHealthcheck();
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
