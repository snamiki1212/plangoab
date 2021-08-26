import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistedReducer } from "./store/persistedReducer";

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

if (process.env.NODE_ENV === "development" && (module as any).hot) {
  (module as any).hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
