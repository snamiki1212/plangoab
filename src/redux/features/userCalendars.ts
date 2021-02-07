import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";
import { BaseStory } from "../../core/story/BaseStory";

type Calendar = BaseCalendar;
type UpdatePayload = { calendars: Calendar[] };
type AddStoryPayload = { calendarId: string; story: BaseStory };

const userCalendarsSlice = createSlice({
  name: "userCalendars",
  initialState: {
    calendars: [] as Calendar[],
  },
  reducers: {
    update(state, action: PayloadAction<UpdatePayload>) {
      const { calendars } = action.payload;
      state.calendars = calendars;
    },
    addStory(state, action: PayloadAction<AddStoryPayload>) {
      const { calendarId, story } = action.payload;
      const idx = state.calendars.findIndex(
        (calendar) => calendar.id === calendarId
      );
      const cannotFind = idx === -1;
      if (cannotFind) {
        console.warn("cannot find calendar on addStory", calendarId);
        return;
      }
      state.calendars[idx].stories.push(story);
    },
  },
});

export const { update, addStory } = userCalendarsSlice.actions;

export default userCalendarsSlice.reducer;

export const selectUserCalendar = (state: RootState) =>
  state.userCalendars.calendars;
