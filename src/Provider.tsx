import React, {PropsWithChildren} from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export function Provider<T>({ children }: PropsWithChildren<T>) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {children}
    </MuiPickersUtilsProvider>
  );
};
