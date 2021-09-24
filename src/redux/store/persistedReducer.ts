import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // NOTE: localstorage for web
import rootReducer from "@/redux/rootReducer";

import { calendarApiV1 } from "../services/calendarApiV1";

const persistConfig = {
  key: "root",
  version: 0,
  storage,
  whitelist: ["features", "ui"],
  blacklist: [calendarApiV1.reducerPath],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
