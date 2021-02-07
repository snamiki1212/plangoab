import React from "react";
import { MuiPickersUtilsProvider } from "./providers/MuiPickersUtilsProvider";
import { CalendarPage } from "./components/pages/CalendarPage";

function App() {
  return (
    <div className="App">
      <MuiPickersUtilsProvider>
        <CalendarPage />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
