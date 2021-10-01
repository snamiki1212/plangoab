import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/rootReducer";
import {
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "~/src/core/v1/calendar/TemplateCalendar/model";
import {
  PrivateCollegeCalendar,
  PublicCollegeCalendar,
} from "~/src/core/v1/calendar/TemplateCalendar/model";

type UpsertPrivateCollegeCalendarPayload = {
  calendar: PrivateCollegeCalendar;
};

type UpsertPublicCollegeCalendarPayload = {
  calendar: PublicCollegeCalendar;
};

const initialState = {
  [PRIVATE_COLLEGE_CALENDAR_ID]: undefined as PrivateCollegeCalendar,
  [PUBLIC_COLLEGE_CALENDAR_ID]: undefined as PublicCollegeCalendar,
};

const templateCalendar = createSlice({
  name: "templateCalendar",
  initialState,
  reducers: {
    reset: () => initialState,
    upsertPrivateCollegeCalendar(
      state,
      action: PayloadAction<UpsertPrivateCollegeCalendarPayload>
    ) {
      const { calendar } = action.payload;
      state[PRIVATE_COLLEGE_CALENDAR_ID] = calendar;
    },
    upsertPublicCollegeCalendar(
      state,
      action: PayloadAction<UpsertPublicCollegeCalendarPayload>
    ) {
      const { calendar } = action.payload;
      state[PUBLIC_COLLEGE_CALENDAR_ID] = calendar;
    },
  },
});

export default templateCalendar.reducer;

export const {
  reset: resetAction,
  upsertPrivateCollegeCalendar: upsertPrivateCollegeCalendarAction,
  upsertPublicCollegeCalendar: upsertPublicCollegeCalendarAction,
} = templateCalendar.actions;

export const selectPrivateCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[PRIVATE_COLLEGE_CALENDAR_ID];

export const selectPublicCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[PUBLIC_COLLEGE_CALENDAR_ID];
