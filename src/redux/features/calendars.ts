import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";
import { generate } from "../../core/calendar/CommunityCollegeAfterwardsWorkingHolidayCalendar/generate";
import { calendarId as CommunityCollegeAfterwardsWorkingHolidayCalendarId } from "../../core/calendar/CommunityCollegeAfterwardsWorkingHolidayCalendar/CommunityCollegeAfterwardsWorkingHolidayCalendar";
import { calendarId as MyCalendarId } from "../../core/calendar/MyCalendar/MyCalendar";
import { RootState } from "../rootReducer";

type Calendar = BaseCalendar;
type SetAction = { calendars: Calendar[] };
type GeneratePayload = {
  birth: Date;
};

const CALENDAR_ID_MAP = {
  MY_CALENDAR: MyCalendarId,
  COMMUNITY_COLLEGE_AFTERWARDS_WORKING_HOLIDAY: CommunityCollegeAfterwardsWorkingHolidayCalendarId,
} as const;

const getCalendarIndex = (calendars: Calendar[], calendarId: string) => {
  const idx = calendars.findIndex((elem) => elem.id === calendarId);
  const cannotFind = idx === -1;
  if (cannotFind) {
    console.warn("cannt find calendar", calendarId);
    return -1;
  }
  return idx;
};
export const selectCalendar = (
  type: "MY_CALENDAR" | "COMMUNITY_COLLEGE_AFTERWARDS_WORKING_HOLIDAY"
) => (state: RootState) => {
  const calendarId = CALENDAR_ID_MAP[type];
  const _calendars = state.calendars.calendars;
  const idx = getCalendarIndex(_calendars, calendarId);
  return _calendars[idx];
};

const calendarsSlice = createSlice({
  name: "calendars",
  initialState: {
    calendars: [] as Calendar[],
  },
  reducers: {
    update(state, action: PayloadAction<SetAction>) {
      const { calendars } = action.payload;
      state.calendars = calendars;
    },

    // TODO: rename later
    // TODO: upsert
    generateCommunityCollegeAfterwardsWorkingHolidayStories(
      state,
      action: PayloadAction<GeneratePayload>
    ) {
      const { birth } = action.payload;

      const _stories = generate(birth);

      const _calendars = state.calendars;
      const calendarId =
        CALENDAR_ID_MAP["COMMUNITY_COLLEGE_AFTERWARDS_WORKING_HOLIDAY"];
      const idx = getCalendarIndex(_calendars, calendarId);
      const isInsert = idx === -1;

      if (isInsert) {
        state.calendars.push({ id: calendarId, stories: _stories });
      } else {
        // update
        state.calendars[idx].stories = _stories;
      }
    },
  },
});

export const {
  update,
  generateCommunityCollegeAfterwardsWorkingHolidayStories,
} = calendarsSlice.actions;

export default calendarsSlice.reducer;
