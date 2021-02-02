import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

export function ReactReduxProvider<T>({ children }: PropsWithChildren<T>) {
  return <Provider store={store}>{children}</Provider>;
}
