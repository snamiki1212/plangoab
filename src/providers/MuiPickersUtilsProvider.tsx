import React, { PropsWithChildren } from "react";
import { MuiPickersUtilsProvider as RawMuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export function MuiPickersUtilsProvider<T>({ children }: PropsWithChildren<T>) {
  return (
    <RawMuiPickersUtilsProvider utils={DateFnsUtils}>
      {children}
    </RawMuiPickersUtilsProvider>
  );
}
