import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./features/user";
import templateCalendarTableReducer from "./features/templateCalendarTable";
import userCalendarsReducer from "./features/userCalendars";
import eventModalReducer from "./ui/eventModal";
import storyModalReducer from "./ui/storyModal";

const uiReducer = combineReducers({
  storyModal: storyModalReducer,
  eventModal: eventModalReducer,
});

const featuresReducer = combineReducers({
  templateCalendar: templateCalendarTableReducer,
  userCalendars: userCalendarsReducer,
  user: userReducer,
});

const rootReducer = combineReducers({
  features: featuresReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
