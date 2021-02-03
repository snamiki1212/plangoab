import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./features/user";
import storiesReducer from "./features/stories";

const rootReducer = combineReducers({
  user: userReducer,
  stories: storiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
