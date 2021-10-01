import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // NOTE: localstorage for web
import rootReducer from "@/redux/rootReducer";

import { calendarApi } from "@/redux/v2/services/calendarApi";

const persistConfig = {
  key: "root",
  version: 0,
  storage,
  whitelist: ["features", "ui"],
  blacklist: ["v2"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
