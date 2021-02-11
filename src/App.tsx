import React from "react";
import { MuiPickersUtilsProvider } from "./providers/MuiPickersUtilsProvider";
import { CalendarPage } from "./components/pages/CalendarPage";
import './reset.css';

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
