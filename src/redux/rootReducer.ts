import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./features/user";
import templateCalendarReducer from "./features/templateCalendar";
import templateOptionReducer from "./features/templateOption";
import userCalendarsReducer from "./features/userCalendars";
import eventModalReducer from "./ui/eventModal";
import storyModalReducer from "./ui/storyModal";
import stepReducer from "./ui/step";
import previewModalReducer from "./ui/previewModal";

import { calendarApiV2 } from "./services/calendarApiV2";

const uiReducer = combineReducers({
  storyModal: storyModalReducer,
  eventModal: eventModalReducer,
  step: stepReducer,
  previewModal: previewModalReducer,
});

const featuresReducer = combineReducers({
  templateCalendar: templateCalendarReducer,
  templateOption: templateOptionReducer,
  userCalendars: userCalendarsReducer,
  user: userReducer,
});

const rootReducer = combineReducers({
  features: featuresReducer,
  ui: uiReducer,
  [calendarApiV2.reducerPath]: calendarApiV2.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
