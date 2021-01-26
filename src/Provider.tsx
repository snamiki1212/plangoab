import React from "react";
import { AgeContextProvider } from "./hooks/useAgeContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const Provider: React.FC = ({ children }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AgeContextProvider>{children}</AgeContextProvider>
    </MuiPickersUtilsProvider>
  );
};
