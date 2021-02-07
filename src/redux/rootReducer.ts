import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./features/user";
import storiesReducer from "./features/stories";
import calendarsReducer from "./features/calendars";

const rootReducer = combineReducers({
  user: userReducer,
  stories: storiesReducer,
  calendars: calendarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
