import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./features/user";
import templateCalendarMapReducer from "./features/templateCalendarMap";
import userCalendarsReducer from "./features/userCalendars";

const rootReducer = combineReducers({
  user: userReducer,

  // Calendars
  templateCalendar: templateCalendarMapReducer,
  userCalendars: userCalendarsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
