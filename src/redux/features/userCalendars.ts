import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";
import { BaseStory } from "../../core/story/BaseStory";
import { BaseEvent } from "../../core/event/BaseEvent";

type Calendar = BaseCalendar;
type UpdatePayload = { calendars: Calendar[] };
type AddStoryPayload = { calendarId: string; story: BaseStory };
type RemoveStoryPayload = { calendarId: string; storyId: string };
type AddEventPayload = {
  calendarId: string;
  storyId: string;
  event: BaseEvent;
};
type RemoveEventPayload = {
  calendarId: string;
  eventId: string;
};

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
    removeStory(state, action: PayloadAction<RemoveStoryPayload>) {
      const { calendarId, storyId } = action.payload;
      const idx = state.calendars.findIndex(
        (calendar) => calendar.id === calendarId
      );
      const cannotFind = idx === -1;
      if (cannotFind) {
        console.warn("cannot find calendar on removeStory", calendarId);
        return;
      }
      state.calendars[idx].stories = state.calendars[idx].stories.filter(
        (story) => story.id !== storyId
      );
    },
    addEvent(state, action: PayloadAction<AddEventPayload>) {
      const { calendarId, storyId, event } = action.payload;

      // calendar
      const calendarIdx = state.calendars.findIndex(
        (calendar) => calendar.id === calendarId
      );
      const cannotFindCalendar = calendarIdx === -1;
      if (cannotFindCalendar) {
        console.warn("cannot find calendar on addEvent", calendarId);
        return;
      }

      // story
      const storyIdx = state.calendars[calendarIdx].stories.findIndex(
        (story) => story.id === storyId
      );
      const cannotFindStory = storyIdx === -1;
      if (cannotFindStory) {
        console.warn("cannot find calendar on addEvent", calendarId);
        return;
      }

      // addd
      state.calendars[calendarIdx].stories[storyIdx].events.push(event);
    },
    removeEvent(state, action: PayloadAction<RemoveEventPayload>) {
      const { calendarId, eventId } = action.payload;

      // calendar
      const calendarIdx = state.calendars.findIndex(
        (calendar) => calendar.id === calendarId
      );
      const cannotFindCalendar = calendarIdx === -1;
      if (cannotFindCalendar) {
        console.warn("cannot find calendar on addEvent", calendarId);
        return;
      }

      // story
      const storyIdx = state.calendars[calendarIdx].stories.findIndex(
        (story) => {
          return story.events.some((_event) => _event.id === eventId);
        }
      );
      const cannotFindStory = storyIdx === -1;
      if (cannotFindStory) {
        console.warn("cannot find calendar on removeEvent", storyIdx);
        return;
      }

      // remove
      state.calendars[calendarIdx].stories[storyIdx].events = state.calendars[
        calendarIdx
      ].stories[storyIdx].events.filter((_event) => _event.id !== eventId);
    },
  },
});

export const {
  update: updateAction,
  addStory: addStoryAction,
  removeStory: removeStoryAction,
  addEvent: addEventAction,
  removeEvent: removeEventAction,
} = userCalendarsSlice.actions;

export default userCalendarsSlice.reducer;

export const selectUserCalendar = (state: RootState) =>
  state.userCalendars.calendars;
