import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootReducer";
import { BaseCalendar } from "@/core/calendar/BaseCalendar";
import { BaseStory, updateStory } from "@/core/story/BaseStory";
import { BaseEvent, updateEvent } from "@/core/event/BaseEvent";
import { BaseResource } from "@/core/resource/BaseResource";
import { memoize } from "lodash";
import { createSelector, current } from "@reduxjs/toolkit";

type Calendar = BaseCalendar;
type RemoveCalendarPayload = { calendarId: string };
type UpdateCalendarsPayload = { calendars: Calendar[] };
type PushRsourceAction = {
  calendarId: string;
  storyId: string;
  resource: BaseResource;
};
type UpdateResourcesPayload = {
  calendarId: string;
  storyId: string;
  newResources: BaseResource[];
};
type RemoveResourcePayload = {
  calendarId: string;
  storyId: string;
  resourceId: string;
};
type AddStoryPayload = { calendarId: string; story: BaseStory };
type RemoveStoryPayload = { calendarId: string; storyId: string };
type UpdateStoryPayload = {
  calendarId: string;
  storyId: string;
  newStory: BaseStory;
};
type UpdateStoryByIdPayload = {
  calendarId: string;
  storyId: string;
  params: Partial<BaseStory>;
};
type AddEventPayload = {
  calendarId: string;
  storyId: string;
  event: BaseEvent;
};
type RemoveEventPayload = {
  calendarId: string;
  storyId: string;
  eventId: string;
};
type UpdateEventPayload = {
  calendarId: string;
  storyId: string;
  eventId: string;
  newEvent: BaseEvent;
};

type UpdateEventByIdPayload = {
  calendarId: string;
  storyId: string;
  eventId: string;
  newEvent: BaseEvent;
};

const initialState = {
  calendars: [] as Calendar[],
};

const userCalendarsSlice = createSlice({
  name: "userCalendars",
  initialState,
  reducers: {
    reset: () => initialState,
    removeCalendar(state, action: PayloadAction<RemoveCalendarPayload>) {
      const { calendarId } = action.payload;
      state.calendars = state.calendars.filter(
        (calendar) => calendar.id !== calendarId
      );
    },
    updateCalendars(state, action: PayloadAction<UpdateCalendarsPayload>) {
      const { calendars } = action.payload;
      state.calendars = calendars;
    },
    pushResource(state, action: PayloadAction<PushRsourceAction>) {
      const { calendarId, storyId, resource } = action.payload;

      const { calendarIdx, storyIdx } = deriveEachIdx(current(state.calendars))(
        { calendarId, storyId }
      );

      // validate
      if (calendarIdx == undefined) {
        return console.warn("Cannot find calendar on pushResource", calendarId);
      }
      if (storyIdx == undefined) {
        return console.warn("Cannot find story on pushResource", storyId);
      }

      // mutate
      state.calendars[calendarIdx].stories[storyIdx].resources.push(resource);
    },
    updateResources(state, action: PayloadAction<UpdateResourcesPayload>) {
      const { calendarId, storyId, newResources } = action.payload;

      const { calendarIdx, storyIdx } = deriveEachIdx(current(state.calendars))(
        { calendarId, storyId }
      );

      // validate
      if (calendarIdx == undefined) {
        return console.warn(
          "cannot find calendar on updateResource",
          calendarId
        );
      }
      if (storyIdx == undefined) {
        return console.warn("cannot find story on updateResource", storyId);
      }

      // mutate
      state.calendars[calendarIdx].stories[storyIdx].resources = newResources;
    },
    removeResource(state, action: PayloadAction<RemoveResourcePayload>) {
      const { calendarId, resourceId, storyId } = action.payload;

      const { calendarIdx, storyIdx, resourceIdx } = deriveEachIdx(
        current(state.calendars)
      )({
        calendarId,
        storyId,
        resourceId,
      });

      // validation
      if (calendarIdx == undefined) {
        return console.warn(
          "cannot find calendar on removeResource",
          calendarId
        );
      }
      if (storyIdx == undefined) {
        return console.warn("cannot find story on removeResource", calendarId);
      }
      if (resourceIdx == undefined) {
        return; // TODO: console.warn?
      }

      // mutate to remove
      state.calendars[calendarIdx].stories[storyIdx].resources.splice(
        resourceIdx,
        1
      );
    },
    addStory(state, action: PayloadAction<AddStoryPayload>) {
      const { calendarId, story } = action.payload;
      const { calendarIdx } = deriveEachIdx(current(state.calendars))({
        calendarId,
      });
      if (calendarIdx == undefined) {
        return console.warn("cannot find calendar on addStory", calendarId);
      }
      state.calendars[calendarIdx].stories.push(story);
    },
    removeStory(state, action: PayloadAction<RemoveStoryPayload>) {
      const { calendarId, storyId } = action.payload;
      const { calendarIdx, storyIdx } = deriveEachIdx(current(state.calendars))(
        { calendarId, storyId }
      );
      if (calendarIdx == undefined) {
        return console.warn("cannot find calendar on removeStory", calendarId);
      }
      if (storyIdx == undefined) {
        return; // TODO: console.warn?
      }

      // mutate
      state.calendars[calendarIdx].stories.splice(storyIdx, 1);
    },
    updateStory(state, action: PayloadAction<UpdateStoryPayload>) {
      const { calendarId, storyId, newStory } = action.payload;
      const { calendarIdx, storyIdx } = deriveEachIdx(current(state.calendars))(
        { calendarId, storyId }
      );

      // validation
      if (calendarIdx == undefined) {
        return console.warn("cannot find calendar on updateStory", calendarId);
      }
      if (storyIdx == undefined) {
        return console.warn("cannot find story on updateStory", storyId);
      }

      // prcess
      state.calendars[calendarIdx].stories[storyIdx] = newStory;
    },
    updateStoryById(state, action: PayloadAction<UpdateStoryByIdPayload>) {
      const { calendarId, storyId, params } = action.payload;
      // calendar
      const calendarIdx = state.calendars.findIndex(
        (calendar) => calendar.id === calendarId
      );
      const cannotFindCalendar = calendarIdx === -1;
      if (cannotFindCalendar) {
        console.warn("cannot find calendar on updateStory", calendarId);
        return;
      }

      // story
      const storyIdx = state.calendars[calendarIdx].stories.findIndex(
        (story) => story.id === storyId
      );
      const cannotFindStory = storyIdx === -1;
      if (cannotFindStory) {
        console.warn("cannot find story on updateStory", calendarId);
        return;
      }

      // update
      const _story = state.calendars[calendarIdx].stories[storyIdx];
      const newStory = updateStory({ ..._story }, params);
      state.calendars[calendarIdx].stories[storyIdx] = newStory;
    },
    addEvent(state, action: PayloadAction<AddEventPayload>) {
      const { calendarId, storyId, event } = action.payload;

      // get
      const idSet = { calendarId, storyId };
      const { calendarIdx, storyIdx } = deriveEachIdx(current(state.calendars))(
        idSet
      );

      // validate
      if (calendarIdx == undefined) {
        return console.warn("cannot find calendar on addEvent", calendarId);
      }
      if (storyIdx == undefined) {
        return console.warn("cannot find story on addEvent", storyId);
      }

      // add
      state.calendars[calendarIdx].stories[storyIdx].events.push(event);
    },
    removeEvent(state, action: PayloadAction<RemoveEventPayload>) {
      const { calendarId, storyId, eventId } = action.payload;

      const { calendarIdx, storyIdx, eventIdx } = deriveEachIdx(
        current(state.calendars)
      )({ calendarId, storyId, eventId });

      // validation
      if (calendarIdx == undefined) {
        return console.warn("cannot find calendar on removeEvent", calendarId);
      }
      if (storyIdx == undefined) {
        return console.warn("cannot find story on removeEvent", storyId);
      }
      if (eventIdx == undefined) {
        return; // TODO: console.warn ??
      }

      // remove
      state.calendars[calendarIdx].stories[storyIdx].events.splice(eventIdx, 1);
    },
    updateEvent(state, action: PayloadAction<UpdateEventPayload>) {
      const { calendarId, storyId, eventId, newEvent } = action.payload;

      const { calendarIdx, storyIdx, eventIdx } = deriveEachIdx(
        current(state.calendars)
      )({ calendarId, storyId, eventId });

      // validation
      if (calendarIdx == undefined) {
        return console.warn("cannot find calendar on updateEvent", calendarId);
      }
      if (storyIdx == undefined) {
        return console.warn("cannot find story on updateEvent", storyId);
      }
      if (eventIdx == undefined) {
        return console.warn("cannot find event on updateEvent", eventId);
      }

      // prcess
      state.calendars[calendarIdx].stories[storyIdx].events[eventIdx] =
        newEvent;
    },
  },
});

export const {
  reset: resetAction,

  // calendars
  removeCalendar: removeCalendarAction,
  updateCalendars: updateCalendarsAction,

  // resources
  pushResource: pushResourceAction,
  updateResources: updateResourcesAction,
  removeResource: removeResourceAction,

  // story
  addStory: addStoryAction,
  removeStory: removeStoryAction,
  updateStory: updateStoryAction,
  updateStoryById: updateStoryByIdAction,

  // event
  addEvent: addEventAction,
  removeEvent: removeEventAction,
  updateEvent: updateEventAction,
} = userCalendarsSlice.actions;

export default userCalendarsSlice.reducer;

const selectUserCalendars = (state: RootState) =>
  state.features.userCalendars.calendars;

const logCalendar = (id: String) =>
  console.warn(`Cannot find calendar: ${id}.`);
const logStory = (id: String) => console.warn(`Cannot find story: ${id}.`);
const logEvent = (id: String) => console.warn(`Cannot find event: ${id}.`);

export const selectStoryByIdFilter = createSelector(
  selectUserCalendars,
  (calendars) =>
    memoize((calendarId: String, storyId: String) => {
      const calendar = calendars.find((item) => item.id === calendarId);
      if (!calendar) {
        logCalendar(calendarId);
        return undefined;
      }
      const story = calendar.stories.find((item) => item.id === storyId);
      if (!story) {
        logStory(storyId);
        return undefined;
      }
      return story;
    })
);

export const selectEventByIdFilter = createSelector(
  selectUserCalendars,
  (calendars) =>
    memoize((calendarId: String, storyId: String, eventId: String) => {
      const calendar = calendars.find((item) => item.id === calendarId);
      if (!calendar) {
        logCalendar(calendarId);
        return undefined;
      }
      const story = calendar.stories.find((item) => item.id === storyId);
      if (!story) {
        logStory(storyId);
        return undefined;
      }
      const event = story.events.find((item) => item.id === eventId);
      if (!event) {
        logEvent(eventId);
        return undefined;
      }
      return event;
    })
);

export const selectUserCalendar = (state: RootState) =>
  state.features.userCalendars.calendars[0]; // NOTE: now calendars have only 1 calendar.

const findIdxOrUndefined = function <T extends { id?: string }>(
  list: T[] | undefined,
  id: any
) {
  if (list == undefined) return undefined;
  if (id == undefined) return undefined;
  const idx = list.findIndex((item) => item?.id === id);
  const canFind = idx !== -1;
  return canFind ? idx : undefined;
};

const deriveEachIdx = (calendars: BaseCalendar[]) =>
  memoize(
    ({
      calendarId,
      storyId,
      eventId,
      resourceId,
    }: {
      calendarId: string;
      storyId?: string;
      eventId?: string;
      resourceId?: string;
    }) => {
      const calendarIdx = findIdxOrUndefined(calendars, calendarId);
      const storyIdx = findIdxOrUndefined(
        calendars[calendarIdx]?.stories,
        storyId
      );
      const resourceIdx = findIdxOrUndefined(
        calendars[calendarIdx]?.stories[storyIdx]?.resources,
        resourceId
      );
      const eventIdx = findIdxOrUndefined(
        calendars[calendarIdx]?.stories[storyIdx]?.events,
        eventId
      );
      return { calendarIdx, storyIdx, eventIdx, resourceIdx };
    }
  );
