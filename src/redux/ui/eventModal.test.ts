import reducer, {
  pushAction,
  popAction,
  selectEvent,
  selectEventModal,
  selectIsOpen,
} from "./eventModal";
import { RootState } from "../rootReducer";

const createRootState = (partialState: any) =>
  ({
    ui: { eventModal: partialState },
  } as RootState);

const initialState = { event: null };

const createDummyEvent = () => ({
  calendarId: "calendarId",
  storyId: "storyId",
  eventId: "eventId",
});

describe(reducer.name, () => {
  it("can save init state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(pushAction.name, () => {
    it("can work when not to have prev state.", () => {
      const prevState = { event: null };
      const event = createDummyEvent();
      expect(reducer(prevState, pushAction(event))).toEqual({
        event,
      });
    });
  });

  describe(popAction.name, () => {
    it("can work when to have prev state.", () => {
      const event = createDummyEvent();
      const prevState = { event };
      expect(reducer(prevState, popAction())).toEqual({ event: null });
    });
  });
});

describe(selectIsOpen.name, () => {
  it("should be false when to close.", () => {
    const rootState = createRootState({ event: null });
    expect(selectIsOpen(rootState)).toBe(false);
  });

  it("should be true when to open.", () => {
    const event = createDummyEvent();
    const rootState = createRootState({ event });
    expect(selectIsOpen(rootState)).toBe(true);
  });
});

describe(selectEventModal.name, () => {
  it("should exist when to open.", () => {
    const event = createDummyEvent();
    const rootState = createRootState({ event });
    expect(selectEventModal(rootState)).toEqual(event);
  });

  it("should not exist when to close.", () => {
    const event = null;
    const rootState = createRootState({ event });
    expect(selectEventModal(rootState)).toEqual(null);
  });
});

describe(selectEvent.name, () => {
  // TODO: selectEvent is not testable for now so it has to refactor using reselector API. REF: https://redux-toolkit.js.org/api/createSelector
  it.skip("can select.", () => {});
  it.skip("can not select when not to find calendar.", () => {});
  it.skip("can not select when not to find story.", () => {});
  it.skip("can not select when not to find event.", () => {});
});
