import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./features/user";

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
