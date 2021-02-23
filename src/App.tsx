import React from "react";
import { MuiPickersUtilsProvider } from "./providers/MuiPickersUtilsProvider";
import { CalendarPage } from "./components/pages/CalendarPage";
import { ErrorBoundary } from "./ErrorBoundary";
import "./reset.css";
import "./core.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MuiPickersUtilsProvider>
          <CalendarPage />
        </MuiPickersUtilsProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
