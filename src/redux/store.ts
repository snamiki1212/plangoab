import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistedReducer } from "@/redux/v1/store/persistedReducer";
import { calendarApiV2 } from "@/redux/v2/services/calendarApiV2";

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }).concat(
    calendarApiV2.middleware
  ),
});

if (process.env.NODE_ENV === "development" && (module as any).hot) {
  (module as any).hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
