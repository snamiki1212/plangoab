import { combineReducers } from "@reduxjs/toolkit";

// V1
import userReducer from "~/src/redux/v1/features/user";
import templateCalendarReducer from "~/src/redux/v1/features/templateCalendar";
import templateOptionReducer from "~/src/redux/v1/features/templateOption";
import userCalendarsReducer from "~/src/redux/v1/features/userCalendars";
import eventModalReducer from "~/src/redux/v1/ui/eventModal";
import storyModalReducer from "~/src/redux/v1/ui/storyModal";
import stepReducer from "~/src/redux/v1/ui/step";
import previewModalReducer from "~/src/redux/v1/ui/previewModal";

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

export const reducerV1 = {
  features: featuresReducer,
  ui: uiReducer,
};
