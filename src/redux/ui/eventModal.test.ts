import reducer, {
  pushAction,
  popAction,
  // selectEvent,
  selectEventModal,
  selectIsOpen,
} from "./eventModal";
import { RootState } from "../rootReducer";

const createRootState = (partialState: any) =>
  ({
    ui: { eventModal: partialState },
  } as RootState);

describe("eventModal reducer", () => {
  it("can save init state", () => {
    const initialState = { event: null };
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe("pushAction", () => {
    const payload = {
      calendarId: "calendarId",
      storyId: "storyId",
      eventId: "eventId",
    };
    it("can work when not to have prev state.", () => {
      const prevState = { event: null };
      expect(reducer(prevState, pushAction(payload))).toEqual({
        event: payload,
      });
    });

    it("can work when to have prev state.", () => {
      const prevState = {
        event: {
          calendarId: "prevCalendarId",
          storyId: "prevStoryId",
          eventId: "prevEventId",
        },
      };
      expect(reducer(prevState, pushAction(payload))).toEqual({
        event: payload,
      });
    });
  });

  describe("popAction", () => {
    it("can work when to have prev state.", () => {
      const prevState = {
        event: {
          calendarId: "calendarId",
          storyId: "storyId",
          eventId: "eventId",
        },
      };
      expect(reducer(prevState, popAction())).toEqual({ event: null });
    });
  });
});

describe("selectIsOpen", () => {
  it("should be false when to close.", () => {
    const rootState = createRootState({ event: null });
    expect(selectIsOpen(rootState)).toBe(false);
  });
  it("should be true when to open.", () => {
    const rootState = createRootState({
      event: {
        calendarId: "calendarId",
        eventId: "eventId",
        storyId: "storyId",
      },
    });
    expect(selectIsOpen(rootState)).toBe(true);
  });
});

describe("selectEventModal", () => {
  it("should exist when to open.", () => {
    const eventModal = {
      event: {
        calendarId: "calendarId",
        eventId: "eventId",
        storyId: "storyId",
      },
    };
    const rootState = createRootState({
      ...eventModal,
    });
    expect(selectEventModal(rootState)).toEqual(eventModal.event);
  });

  it("should not exist when to close.", () => {
    const eventModal = {
      event: null,
    };
    const rootState = createRootState({
      ...eventModal,
    });
    expect(selectEventModal(rootState)).toEqual(eventModal.event);
  });
});

describe("selectEvent", () => {
  // TODO: selectEvent is not testable for now so it has to refactor using reselector API. REF: https://redux-toolkit.js.org/api/createSelector
  it.skip("can select.", () => {});
  it.skip("can not select when not to find calendar.", () => {});
  it.skip("can not select when not to find story.", () => {});
  it.skip("can not select when not to find event.", () => {});
});
