import React, {PropsWithChildren} from "react";
import { AgeContextProvider } from "./hooks/useAgeContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export function Provider<T>({ children }: PropsWithChildren<T>) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AgeContextProvider>{children}</AgeContextProvider>
    </MuiPickersUtilsProvider>
  );
};
