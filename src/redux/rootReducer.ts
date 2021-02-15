import { combineReducers } from "@reduxjs/toolkit";

// reducers
import userReducer from "./features/user";
import templateCalendarTableReducer from "./features/templateCalendarTable";
import userCalendarsReducer from "./features/userCalendars";
import resourceModalReducer from "./ui/resourceModal";
import storyModalReducer from "./ui/storyModal";

const uiReducer = combineReducers({
  resourceModal: resourceModalReducer,
  storyModal: storyModalReducer,
});

const rootReducer = combineReducers({
  user: userReducer,

  // Calendars
  templateCalendar: templateCalendarTableReducer,
  userCalendars: userCalendarsReducer,

  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
