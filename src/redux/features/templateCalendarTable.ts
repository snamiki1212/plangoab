import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCalendar } from "../../core/calendar/PrivateCollegeCalendar/createCalendar";
import { calendarId as PrivateCollegeCalendarId } from "../../core/calendar/PrivateCollegeCalendar/model";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";
import { RootState } from "../rootReducer";

type upsertPrivateCollegeStoriesPayload = {
  birth: string;
  canWorkingholiday: boolean;
};

const templateCalendarTable = createSlice({
  name: "templateCalendarTable",
  initialState: {
    [PrivateCollegeCalendarId]: undefined as BaseCalendar | undefined,
  },
  reducers: {
    upsertPrivateCollegeStories(
      state,
      action: PayloadAction<upsertPrivateCollegeStoriesPayload>
    ) {
      const { birth, canWorkingholiday } = action.payload;
      const _calendar = createCalendar({
        birth: new Date(birth),
        canWorkingholiday,
      });
      state[PrivateCollegeCalendarId] = _calendar;
    },
  },
});

export default templateCalendarTable.reducer;

export const {
  upsertPrivateCollegeStories: upsertPrivateCollegeStoriesAction,
} = templateCalendarTable.actions;

export const selectPrivateCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[PrivateCollegeCalendarId];
