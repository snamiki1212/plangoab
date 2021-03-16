import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // NOTE: localstorage for web
import rootReducer from "../rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["features", "ui"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
