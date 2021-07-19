import reducer, {
  pushAction,
  popAction,
  selectEvent,
  selectEventModal,
  selectIsOpen,
} from "./eventModal";
import { RootState } from "../rootReducer";

type DummyCalendar = any;
type DummyStory = any;
type DummyEvent = any;

const createDummyCalendar = ({ id }: { id: any }) => ({ id } as DummyCalendar);
const createDummyStory = ({ id }: { id: any }) => ({ id } as DummyStory);
const createDummyEvent = ({ id }: { id: String }) => ({ id } as DummyEvent);
const createDummyEventModal = () => ({
  calendarId: "calendarId",
  storyId: "storyId",
  eventId: "eventId",
});

type DummyEventModal = ReturnType<typeof createDummyEventModal>;

const createRootState = ({
  eventModalInfo = null,
  calendars = [],
}: {
  eventModalInfo?: DummyEventModal;
  calendars?: DummyCalendar[];
}) =>
  ({
    ui: { eventModal: { event: eventModalInfo } },
    features: { userCalendars: { calendars } },
  } as any as RootState);

describe(reducer.name, () => {
  it("can save init state", () => {
    const initialState = { event: null };
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(pushAction.name, () => {
    it("can work when not to have prev state.", () => {
      const modalInfo = createDummyEventModal();
      const befState = { event: null };
      const aftState = { event: modalInfo };
      expect(reducer(befState, pushAction(modalInfo))).toEqual(aftState);
    });
  });

  describe(popAction.name, () => {
    it("can work when to have prev state.", () => {
      const modalInfo = createDummyEventModal();
      const befState = { event: modalInfo };
      const aftState = { event: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(selectIsOpen.name, () => {
  it("should be false when to close.", () => {
    const rootState = createRootState({ eventModalInfo: null });
    expect(selectIsOpen(rootState)).toBe(false);
  });

  it("should be true when to open.", () => {
    const modal = createDummyEventModal();
    const rootState = createRootState({ eventModalInfo: modal });
    expect(selectIsOpen(rootState)).toBe(true);
  });
});

describe(selectEventModal.name, () => {
  it("should exist when to open.", () => {
    const modal = createDummyEventModal();
    const rootState = createRootState({ eventModalInfo: modal });
    expect(selectEventModal(rootState)).toEqual(modal);
  });

  it("should not exist when to close.", () => {
    const modal = null;
    const rootState = createRootState({ eventModalInfo: modal });
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
