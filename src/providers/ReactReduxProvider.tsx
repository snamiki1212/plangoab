import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "@/redux/store";
import { LoadingPage } from "@/components/v1/pages/LoadingPage";

export function ReactReduxProvider<T>({ children }: PropsWithChildren<T>) {
  return (
    <Provider store={store}>
      <PersistProvider>{children}</PersistProvider>
    </Provider>
  );
}

function PersistProvider<T>({ children }: PropsWithChildren<T>) {
  let persistor = persistStore(store);
  return (
    <PersistGate loading={<LoadingPage />} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
