import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "@/redux/v1/features/user";
import templateCalendarReducer from "@/redux/v1/features/templateCalendar";
import templateOptionReducer from "@/redux/v1/features/templateOption";
import userCalendarsReducer from "@/redux/v1/features/userCalendars";
import eventModalReducer from "@/redux/v1/ui/eventModal";
import storyModalReducer from "@/redux/v1/ui/storyModal";
import stepReducer from "@/redux/v1/ui/step";
import previewModalReducer from "@/redux/v1/ui/previewModal";

import { calendarApi } from "@/redux/v2/services/calendarApi";

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

const V1 = {
  features: featuresReducer,
  ui: uiReducer,
};

const V2Reducer = combineReducers({
  [calendarApi.reducerPath]: calendarApi.reducer,
});

const rootReducer = combineReducers({
  ...V1,
  v2: V2Reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
