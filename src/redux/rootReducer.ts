import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "@/redux/v1/features/user";
import templateCalendarReducer from "@/redux/v1/features/templateCalendar";
import templateOptionReducer from "@/redux/v1/features/templateOption";
import userCalendarsReducer from "@/redux/v1/features/userCalendars";
import eventModalReducer from "@/redux/v1/ui/eventModal";
import storyModalReducer from "@/redux/v1/ui/storyModal";
import stepReducer from "@/redux/v1/ui/step";
import previewModalReducer from "@/redux/v1/ui/previewModal";

import { calendarApiV2 } from "@/redux/v2/services/calendarApiV2";

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
