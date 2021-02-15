import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type State = {
  resource: null | {
    calendarId: string;
    storyId: string;
    resourceId: string;
  };
};

type PushPayload = {
  calendarId: string;
  storyId: string;
  resourceId: string;
};

type PopPayload = undefined;

const slice = createSlice({
  name: "resourceModal",
  initialState: {
    resource: null,
  } as State,
  reducers: {
    push(state, action: PayloadAction<PushPayload>) {
      const _payload = action.payload;
      state.resource = _payload;
    },
    pop(state, _action: PayloadAction<PopPayload>) {
      state.resource = null;
    },
  },
});

export const selectIsOpen = (state: RootState) =>
  !!state.resourceModal.resource;

export const selectResourceModal = (state: RootState) =>
  state.resourceModal.resource;

export const selectResource = (state: RootState) => {
  const _resource = state.resourceModal.resource;
  if (!_resource) return null;
  const { calendarId, storyId, resourceId } = _resource;

  // calendar
  const calendarIdx = state.userCalendars.calendars.findIndex(
    (calendar) => calendar.id === calendarId
  );
  const cannotFind = calendarIdx === -1;
  if (cannotFind) {
    console.warn("cannot find calendar on removeResource", calendarId);
    return;
  }

  // story
  const storyIdx = state.userCalendars.calendars[calendarIdx].stories.findIndex(
    (story) => story.id === storyId
  );
  const cannotFindStory = storyIdx === -1;
  if (cannotFindStory) {
    console.warn("cannot find story on removeResource", calendarId);
    return;
  }

  //
  return state.userCalendars.calendars[calendarIdx].stories[
    storyIdx
  ].resources.find((resource) => resource.id === resourceId);
};

export const { push: pushAction, pop: popAction } = slice.actions;

export default slice.reducer;
