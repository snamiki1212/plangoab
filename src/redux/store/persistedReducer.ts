import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // NOTE: localstorage for web
import rootReducer from "@/redux/rootReducer";

const persistConfig = {
  key: "root",
  version: 0,
  storage,
  whitelist: ["features", "ui"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
