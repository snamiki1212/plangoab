import React from "react";

import { Provider } from "./Provider";
import {CalendarPage} from './components/pages/CalendarPage'

function App() {
  return (
    <div className="App">
      <Provider>
        <CalendarPage />
      </Provider>
    </div>
  );
}

export default App;
