import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCalendar } from "../../core/calendar/CommunityCollegeCalendar/createCalendar";
import { calendarId as CommunityCollegeCalendarId } from "../../core/calendar/CommunityCollegeCalendar/model";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";
import { RootState } from "../rootReducer";

type upsertCommunityCollegeStoriesPayload = {
  birth: string;
  canWorkingholiday: boolean;
};

const templateCalendarTable = createSlice({
  name: "templateCalendarTable",
  initialState: {
    [CommunityCollegeCalendarId]: undefined as BaseCalendar | undefined,
  },
  reducers: {
    upsertCommunityCollegeStories(
      state,
      action: PayloadAction<upsertCommunityCollegeStoriesPayload>
    ) {
      const { birth, canWorkingholiday } = action.payload;
      const _calendar = createCalendar({
        birth: new Date(birth),
        canWorkingholiday,
      });
      state[CommunityCollegeCalendarId] = _calendar;
    },
  },
});

export default templateCalendarTable.reducer;

export const {
  upsertCommunityCollegeStories: upsertCommunityCollegeStoriesAction,
} = templateCalendarTable.actions;

export const selectCommunityCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[CommunityCollegeCalendarId];
