import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./features/user";
import templateCalendarTableReducer from "./features/templateCalendarTable";
import userCalendarsReducer from "./features/userCalendars";

const rootReducer = combineReducers({
  user: userReducer,

  // Calendars
  templateCalendar: templateCalendarTableReducer,
  userCalendars: userCalendarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
