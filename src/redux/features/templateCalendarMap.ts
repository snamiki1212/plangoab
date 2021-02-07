import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCalendar } from "../../core/calendar/CommunityCollegeAfterwardsWorkingHolidayCalendar/createCalendar";
import { calendarId as CommunityCollegeAfterwardsWorkingHolidayCalendarId } from "../../core/calendar/CommunityCollegeAfterwardsWorkingHolidayCalendar/CommunityCollegeAfterwardsWorkingHolidayCalendar";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";
import { RootState } from "../rootReducer";

type GeneratePayload = {
  birth: string;
};

const templateCalendarMap = createSlice({
  name: "templateCalendarMap",
  initialState: {
    [CommunityCollegeAfterwardsWorkingHolidayCalendarId]: undefined as
      | BaseCalendar
      | undefined,
  },
  reducers: {
    upsertCommunityCollegeAfterwardsWorkingHolidayStories(
      state,
      action: PayloadAction<GeneratePayload>
    ) {
      const { birth } = action.payload;
      const _calendar = createCalendar({ birth: new Date(birth) });
      state[CommunityCollegeAfterwardsWorkingHolidayCalendarId] = _calendar;
    },
  },
});

export default templateCalendarMap.reducer;

export const {
  upsertCommunityCollegeAfterwardsWorkingHolidayStories,
} = templateCalendarMap.actions;

export const selectTable = (state: RootState) => state.templateCalendar;

export const selectCommunityCollegeAfterwardsWorkingHolidayCalendar = (
  state: RootState
) => state.templateCalendar[CommunityCollegeAfterwardsWorkingHolidayCalendarId];
