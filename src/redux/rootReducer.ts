import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./features/user";
import calendarsReducer from "./features/calendars";

const rootReducer = combineReducers({
  user: userReducer,
  calendars: calendarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
