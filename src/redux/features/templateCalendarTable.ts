import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootReducer";
import {
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "@/core/calendar/TemplateCalendar/model";
import {
  PrivateCollegeCalendar,
  PublicCollegeCalendar,
} from "@/core/calendar/TemplateCalendar/model";

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

const templateCalendarTable = createSlice({
  name: "templateCalendarTable",
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

export default templateCalendarTable.reducer;

export const {
  reset: resetAction,
  upsertPrivateCollegeCalendar: upsertPrivateCollegeCalendarAction,
  upsertPublicCollegeCalendar: upsertPublicCollegeCalendarAction,
} = templateCalendarTable.actions;

export const selectPrivateCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[PRIVATE_COLLEGE_CALENDAR_ID];

export const selectPublicCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[PUBLIC_COLLEGE_CALENDAR_ID];
