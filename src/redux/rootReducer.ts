import { combineReducers } from "@reduxjs/toolkit";

// V1
import userReducer from "@/redux/v1/features/user";
import templateCalendarReducer from "@/redux/v1/features/templateCalendar";
import templateOptionReducer from "@/redux/v1/features/templateOption";
import userCalendarsReducer from "@/redux/v1/features/userCalendars";
import eventModalReducer from "@/redux/v1/ui/eventModal";
import storyModalReducer from "@/redux/v1/ui/storyModal";
import stepReducer from "@/redux/v1/ui/step";
import previewModalReducer from "@/redux/v1/ui/previewModal";

// V2
import { calendarApi } from "@/redux/v2/services/calendarApi";
import stepReducerV2 from "@/redux/v2/stores/ui/step";
import saveModalReducerV2 from "@/redux/v2/stores/ui/saveModal";
import selectedTabReducerV2 from "@/redux/v2/stores/features/selectedTab";

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

const uiReducerV2 = combineReducers({
  step: stepReducerV2,
  saveModal: saveModalReducerV2,
});

const featuresReducerV2 = combineReducers({
  selectedTab: selectedTabReducerV2,
});

const V2Reducer = combineReducers({
  features: featuresReducerV2,
  ui: uiReducerV2,
});

const rootReducer = combineReducers({
  ...V1,
  [calendarApi.reducerPath]: calendarApi.reducer, // TODO: this line should move to V2 reducer
  v2: V2Reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
